import prisma from "../../config/prisma";

export const getOverviewService = async (
  teamId: string
) => {

  const totalProjects =
    await prisma.projects.count({
      where: {
        team_id: teamId,
      },
    });

  const totalTasks =
    await prisma.tasks.count({
      where: {
        team_id: teamId,
      },
    });

  const completedTasks =
    await prisma.tasks.count({
      where: {
        team_id: teamId,
        status: "DONE",
      },
    });

  const overdueTasks =
    await prisma.tasks.count({
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

  const inProgressTasks =
    await prisma.tasks.count({
      where: {
        team_id: teamId,
        status: "IN_PROGRESS",
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

      include: {

        project: {
          select: {
            id: true,
            name: true,
          },
        },

        users_tasks_assignee_idTousers: {
          select: {
            id: true,
            full_name: true,
            avatar: true,
          },
        },

      },

      orderBy: {
        deadline: "asc",
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

export const getRecentActivitiesService =
  async (teamId: string) => {

    return prisma.project_activities.findMany({

      where: {
        team_id: teamId,
      },

      include: {

        project: {
          select: {
            name: true,
          },
        },

      },

      orderBy: {
        created_at: "desc",
      },

      take: 6,

    });

  };

export const getInsightsService = (
  overview: {
    overdueTasks: number;
    inProgressTasks: number;
  },
  progress: {
    totalTasks: number;
    completedTasks: number;
    overallProgress: number;
  }
) => {

  const productivityScore =
    progress.overallProgress;

  let recommendation =
    "Current sprint is healthy.";

  if (overview.overdueTasks > 0) {
    recommendation =
      "Complete overdue tasks before starting new work.";
  } else if (overview.inProgressTasks >= 8) {
    recommendation =
      "Reduce multitasking and finish current tasks.";
  }

  let risk =
    "No critical risks detected.";

  if (overview.overdueTasks > 0) {
    risk =
      `${overview.overdueTasks} overdue task(s) require attention.`;
  }

  return {
    productivityScore,

    recommendation,

    risk,

    focusWindow: "08:00 - 12:00",

    sprintSuccess:
      progress.totalTasks === 0
        ? 0
        : Math.round(
            progress.completedTasks /
              progress.totalTasks *
              100
          ),
  };
};