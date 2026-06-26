import prisma from "../../config/prisma";

export const getOverviewService = async (
  teamId: string
) => {
  const totalTasks = await prisma.tasks.count({
    where: {
      team_id: teamId,
    },
  });

  const completedTasks = await prisma.tasks.count({
    where: {
      team_id: teamId,
      status: "DONE",
    },
  });

  const overdueTasks = await prisma.tasks.count({
    where: {
      team_id: teamId,
      deadline: {
        lt: new Date(),
      },
      status: {
        not: "DONE",
      },
    },
  });

  const inProgressTasks = await prisma.tasks.count({
    where: {
      team_id: teamId,
      status: "IN_PROGRESS",
    },
  });

  const totalProjects =
    await prisma.projects.count({
      where: {
        team_id: teamId,
      },
    });

  return {
    totalProjects,
    totalTasks,
    completedTasks,
    overdueTasks,
    inProgressTasks,
  };
};

export const getTeamProgressService = async (
  teamId: string
) => {

  const tasks =
    await prisma.tasks.findMany({
      where: {
        team_id: teamId,
      },
      select: {
        id: true,
        title: true,
        progress: true,
        status: true,
      },
    });

  const completedTasks =
    tasks.filter(
      task => task.status === "DONE"
    ).length;

  const overallProgress =
    tasks.length === 0
      ? 0
      : Math.round(
        tasks.reduce(
          (sum, task) =>
            sum + (task.progress || 0),
          0
        ) / tasks.length
      );

  return {
    totalTasks: tasks.length,
    completedTasks,
    overallProgress,
    tasks,
  };
};

