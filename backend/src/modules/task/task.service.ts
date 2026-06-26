import prisma from "../../config/prisma";
import { getIO } from "../../config/socket";
import { AppError } from "../../middlewares/error.middleware";
import { mapTaskStatusToPrisma } from "./task.mapper";
import { assertProjectAccess, assertTeamMember } from "./task.permission";
import { findMyTasks, findProjectTasks } from "./task.query";

type UpdateTaskDto = {
  title?: string;
  description?: string;
  priority?: string;
  deadline?: string;
  start_date?: string;
};

/* 
   CREATE TASK
 */
export const createTaskService = async (data: {
  teamId: string;
  projectId: string;
  title: string;
  description?: string;
  priority?: string;
  start_date?: string;
  deadline?: string;
  assigneeId?: string;
  createdBy: string;
  estimatedHours?: number;

}) => {
  if (!data.title) {
    throw new AppError("Title is required", 400);
  }

  if (!data.priority) {
    throw new AppError("Priority is required", 400);
  }
  const project =
    await prisma.projects.findUnique({
      where: {
        id: data.projectId,
      },
    });

  if (!project) {
    throw new AppError(
      "Project not found",
      404
    );
  }

  const team =
    await prisma.teams.findUnique({
      where: {
        id: data.teamId,
      },
    });

  if (!team) {
    throw new AppError(
      "Team not found",
      404
    );
  }

  if (
    project.team_id !== data.teamId
  ) {
    throw new AppError(
      "Project does not belong to team",
      400
    );
  }

  const member =
    await prisma.team_members.findFirst({
      where: {
        team_id: data.teamId,
        user_id: data.createdBy,
      },
    });

  if (!member) {
    throw new AppError(
      "Forbidden",
      403
    );
  }

  const task = await prisma.tasks.create({
    data: {
      team_id: data.teamId,
      project_id: data.projectId,
      title: data.title,
      description: data.description,
      priority: data.priority,
      start_date: data.start_date ? new Date(data.start_date) : null,
      deadline: data.deadline ? new Date(data.deadline) : null,
      assignee_id: data.assigneeId,
      created_by: data.createdBy,
      estimated_hours:
        data.estimatedHours,
    },
  });

  const io = getIO();
  io.emit("taskCreated", task);

  return task;
};


/* 
   GET TASKS
 */
export const getTasksService = async (filters: {
  teamId?: string;
  projectId?: string;
  status?: string;
  priority?: string;
  userId?: string;
}) => {

  const { teamId, projectId, status, priority, userId } = filters;

  // =========================
  // CASE 1: MY TASKS
  // =========================
  if (!projectId && !teamId) {
    const tasks = await findMyTasks(userId!);

    return tasks;
  }

  // =========================
  // CASE 2: PROJECT BOARD (MAIN)
  // =========================
  if (projectId) {

    await assertProjectAccess(projectId, userId!);

    const tasks = await findProjectTasks(projectId);

    return tasks.filter(t => {
      if (status && t.status !== mapTaskStatusToPrisma(status)) return false;
      if (priority && t.priority !== priority) return false;
      return true;
    });
  }

  // =========================
  // CASE 3: TEAM (optional future)
  // =========================
  throw new AppError("Invalid task query", 400);
};

/* 
   GET TASK DETAIL
 */
export const getTaskDetailService = async (
  taskId: string,
  userId: string
) => {

  const task =
    await prisma.tasks.findUnique({
      where: {
        id: taskId,
      },
      include: {
        users_tasks_assignee_idTousers: true,

        users_tasks_created_byTousers: true,

        teams: true,

        task_progress: {
          include: {
            users: true,
          },

          orderBy: {
            created_at: "desc",
          },
        },
      },
    });

  if (!task) {
    throw new AppError(
      "Task not found",
      404
    );
  }

  const member =
    await prisma.team_members.findFirst({
      where: {
        team_id: task.team_id,
        user_id: userId,
      },
    });

  if (!member) {
    throw new AppError(
      "Forbidden",
      403
    );
  }

  const isOwner = task.created_by === userId;

  return {
    ...task,
    isOwner,
  };
};

/* 
   UPDATE TASK
 */
export const updateTaskService = async (taskId: string, data: UpdateTaskDto, userId: string) => {

  const existingTask =
    await prisma.tasks.findUnique({
      where: {
        id: taskId,
      },
    });

  if (!existingTask) {
    throw new AppError(
      "Task not found",
      404
    );
  }
  const isOwner = existingTask.created_by === userId;
  const member = await prisma.team_members.findFirst({
    where: {
      team_id: existingTask.team_id,
      user_id: userId,
    },
  });

  if (!member) {
    throw new AppError("Forbidden", 403);
  }
  const restrictedFields = ["priority", "assignee_id", "deadline"];

  if (!isOwner) {
    for (const key of restrictedFields) {
      if (key in data) {
        throw new AppError(
          "Only owner can update priority, assignee, deadline",
          403
        );
      }
    }
  }
  const updatedTask = await prisma.tasks.update({
    where: {
      id: taskId,
    },
    data: {
      title: data.title,
      description: data.description,
      priority: data.priority,
      start_date:
        data.start_date
          ? new Date(data.start_date)
          : undefined,
      deadline:
        data.deadline
          ? new Date(data.deadline)
          : undefined,
    },
  });

  await prisma.task_progress.create({
    data: {
      task_id: taskId,
      note: "Task information updated",
      updated_by: userId,
    },
  });

  const io = getIO();
  io.emit("taskUpdated", updatedTask);

  return updatedTask;
};

/* 
   DELETE TASK
 */
export const deleteTaskService = async (taskId: string, userId: string) => {

  const task =
    await prisma.tasks.findUnique({
      where: {
        id: taskId,
      },
    });

  if (!task) {
    throw new AppError(
      "Task not found",
      404
    );
  }

  const team = await prisma.teams.findUnique({
    where: {
      id: task.team_id,
    },
  });

  if (!team) {
    throw new AppError("Team not found", 404);
  }

  if (team.owner_id !== userId) {
    throw new AppError(
      "Only team owner can delete task",
      403
    );
  }

  const deletedTask = await prisma.tasks.delete({
    where: {
      id: taskId,
    },
  });


  const io = getIO();
  io.emit("taskDeleted", taskId);

  return deletedTask;
};

/* 
   UPDATE STATUS
 */
export const updateTaskStatusService = async (
  taskId: string,
  status: string,
  userId: string
) => {

  const existingTask =
    await prisma.tasks.findUnique({
      where: {
        id: taskId
      }
    });

  if (!existingTask) {
    throw new AppError(
      "Task not found",
      404
    );
  }

  await assertTeamMember(existingTask.team_id, userId);

  const task = await prisma.tasks.update({
    where: {
      id: taskId,
    },
    data: {
      status: mapTaskStatusToPrisma(status),
    },
  });

  await prisma.task_progress.create({
    data: {
      task_id: taskId,
      note: `Status changed to ${status}`,
      updated_by: userId,
    },
  });

  const io = getIO();
  io.to(`project_${task.project_id}`).emit("taskUpdated", task);

  return task;
};

/* 
   UPDATE PROGRESS
 */
export const updateTaskProgressService = async (
  taskId: string,
  progress: number,
  userId: string
) => {
  const task =
    await prisma.tasks.findUnique({
      where: {
        id: taskId,
      },
    });

  if (!task) {
    throw new AppError(
      "Task not found",
      404
    );
  }

  await assertTeamMember(
    task.team_id,
    userId
  );

  if (
    progress < 0 ||
    progress > 100
  ) {
    throw new AppError(
      "Progress must be between 0 and 100",
      400
    );
  }

  // update task progress
  const updatedTask = await prisma.tasks.update({
    where: {
      id: taskId,
    },
    data: {
      progress,

      ...(progress === 100 && {
        status: "DONE",
      }),
    },
  });

  // create activity log
  await prisma.task_progress.create({
    data: {
      task_id: taskId,
      progress,
      note: "Task progress updated",
      updated_by: userId,
    },
  });


  const io = getIO();
  io.emit("taskUpdated", updatedTask);

  return updatedTask;
};

/* 
   ASSIGN TASK
 */
export const assignTaskService = async (
  taskId: string,
  assigneeId: string,
  userId: string
) => {

  const existingTask = await prisma.tasks.findUnique({
    where: { id: taskId },
  });

  if (!existingTask) throw new AppError("Task not found", 404);

  // người assign phải thuộc team
  await assertTeamMember(existingTask.team_id, userId);

  // người được assign cũng phải thuộc team
  await assertTeamMember(existingTask.team_id, assigneeId);

  const task = await prisma.tasks.update({
    where: {
      id: taskId,
    },
    data: {
      assignee_id: assigneeId,
    },
  });

  await prisma.task_progress.create({
    data: {
      task_id: taskId,
      note: "Assignee updated",
      updated_by: userId,
    },
  });

  const io = getIO();
  io.to(`project_${task.project_id}`).emit("taskUpdated", task);

  return task;
};