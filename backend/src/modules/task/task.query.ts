import prisma from "../../config/prisma";

export const findMyTasks = (userId: string) => {
  return prisma.tasks.findMany({
    where: {
      assignee_id: userId,
    },
    include: {
      users_tasks_assignee_idTousers: true,
      teams: true,
    },
  });
};

export const findProjectTasks = (projectId: string) => {
  return prisma.tasks.findMany({
    where: {
      project_id: projectId,
    },
    include: {
      users_tasks_assignee_idTousers: true,
      teams: true,
    },
  });
};