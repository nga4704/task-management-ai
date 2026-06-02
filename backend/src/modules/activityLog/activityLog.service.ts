import prisma from "../config/prisma";

export const getTaskActivityLogsService =
  async (
    taskId: string
  ) => {

    return prisma.task_progress.findMany({
      where: {
        task_id: taskId,
      },

      include: {
        users: true,
      },

      orderBy: {
        created_at: "desc",
      },
    });
  };