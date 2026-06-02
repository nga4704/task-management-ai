import prisma from "../config/prisma";
import { getIO } from "../config/socket";

/* 
   CREATE TASK
 */
export const createTaskService = async (data: {
  teamId: string;
  title: string;
  description?: string;
  priority?: string;
  deadline?: Date;
  assigneeId?: string;
  createdBy: string;
}) => {
  const task = await prisma.tasks.create({
    data: {
      team_id: data.teamId,
      title: data.title,
      description: data.description,
      priority: data.priority,
      deadline: data.deadline,
      assignee_id: data.assigneeId,
      created_by: data.createdBy,
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
  status?: string;
  priority?: string;
}) => {
  return prisma.tasks.findMany({
    where: {
      team_id: filters.teamId,
      status: filters.status,
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
      deadline: data.deadline,
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
      status,
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