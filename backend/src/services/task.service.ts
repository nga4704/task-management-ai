import prisma from "../config/prisma";

export const createTaskService = async (
  data: {
    teamId: string;
    title: string;
    description?: string;
    priority?: string;
    deadline?: Date;
    assigneeId?: string;
    createdBy: string;
  }
) => {

  return prisma.tasks.create({
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
};

export const getTasksService = async (
  filters: {
    teamId?: string;
    status?: string;
    priority?: string;
  }
) => {

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

export const getTaskDetailService = async (
  taskId: string
) => {

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

export const updateTaskService = async (
  taskId: string,
  data: any
) => {

  return prisma.tasks.update({
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
};

export const deleteTaskService = async (
  taskId: string
) => {

  return prisma.tasks.delete({
    where: {
      id: taskId,
    },
  });
};

export const updateTaskStatusService = async (
  taskId: string,
  status: string
) => {

  return prisma.tasks.update({
    where: {
      id: taskId,
    },
    data: {
      status,
    },
  });
};

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

  return updatedTask;
};

export const assignTaskService = async (
  taskId: string,
  assigneeId: string
) => {

  return prisma.tasks.update({
    where: {
      id: taskId,
    },
    data: {
      assignee_id: assigneeId,
    },
  });
};