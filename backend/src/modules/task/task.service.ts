import prisma from "../../config/prisma";
import { getIO } from "../../config/socket";
import { AppError } from "../../middlewares/error.middleware";
import { mapTaskStatusToPrisma } from "./task.mapper";
/* 
   CREATE TASK
 */
export const createTaskService = async (data: {
  teamId: string;
  projectId: string;
  title: string;
  description?: string;
  priority?: string;
  deadline?: string;
  assigneeId?: string;
  createdBy: string;
  estimatedHours?: number;

}) => {
  const task = await prisma.tasks.create({
    data: {
      team_id: data.teamId,
      project_id: data.projectId,
      title: data.title,
      description: data.description,
      priority: data.priority,
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
  const membership = await prisma.team_members.findFirst({
    where: {
      team_id: filters.teamId,
      user_id: filters.userId,
    },
  });

  if (!membership) {
    throw new AppError("Forbidden", 403);
  }

  return prisma.tasks.findMany({
    where: {
      team_id: filters.teamId,
      project_id: filters.projectId,
      status: filters.status
        ? mapTaskStatusToPrisma(filters.status)
        : undefined,
      priority: filters.priority,
    },
    include: {
      users_tasks_assignee_idTousers: true,
      teams: true,
    },
  });
};

/* 
   GET TASK DETAIL
 */
export const getTaskDetailService = async (taskId: string) => {
  return prisma.tasks.findUnique({
    where: {
      id: taskId,
    },
    include: {
      users_tasks_assignee_idTousers: true,
      teams: true,
      task_progress: true,
    },
  });
};

/* 
   UPDATE TASK
 */
export const updateTaskService = async (taskId: string, data: any) => {
  const updatedTask = await prisma.tasks.update({
    where: {
      id: taskId,
    },
    data: {
      title: data.title,
      description: data.description,
      priority: data.priority,
      deadline:
        data.deadline
          ? new Date(data.deadline)
          : undefined,
    },
  });


  const io = getIO();
  io.emit("taskUpdated", updatedTask);

  return updatedTask;
};

/* 
   DELETE TASK
 */
export const deleteTaskService = async (taskId: string) => {
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
  status: string
) => {
  const task = await prisma.tasks.update({
    where: {
      id: taskId,
    },
    data: {
      status: status ? mapTaskStatusToPrisma(status) : undefined,
    },
  });


  const io = getIO();
  io.emit("taskUpdated", task);

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
  // update task progress
  const updatedTask = await prisma.tasks.update({
    where: {
      id: taskId,
    },
    data: {
      progress,
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
  assigneeId: string
) => {
  const task = await prisma.tasks.update({
    where: {
      id: taskId,
    },
    data: {
      assignee_id: assigneeId,
    },
  });


  const io = getIO();
  io.emit("taskUpdated", task);

  return task;
};