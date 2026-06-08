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
      status: "done",
    },
  });

  const overdueTasks = await prisma.tasks.count({
    where: {
      team_id: teamId,
      deadline: {
        lt: new Date(),
      },
      status: {
        not: "done",
      },
    },
  });

  const inProgressTasks = await prisma.tasks.count({
    where: {
      team_id: teamId,
      status: "in-progress",
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
      task => task.status === "done"
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

export const getWorkloadService = async (
  teamId: string
) => {

  const members = await prisma.team_members.findMany({
    where: {
      team_id: teamId,
    },
    include: {
      users: {
        include: {
          tasks_tasks_assignee_idTousers: true,
        },
      },
    },
  });

  return members.map(member => {

  const tasks =
    member.users
      .tasks_tasks_assignee_idTousers
      .filter(
        task =>
          task.team_id === teamId
      );

  return {
    userId: member.users.id,
    fullName: member.users.full_name,

    totalTasks: tasks.length,

    completedTasks:
      tasks.filter(
        task => task.status === "done"
      ).length,

    inProgressTasks:
      tasks.filter(
        task =>
          task.status === "in-progress"
      ).length,
  };
});
};