import prisma from "../config/prisma";

export const getOverviewService = async () => {

  // total tasks
  const totalTasks = await prisma.tasks.count();

  // completed tasks
  const completedTasks = await prisma.tasks.count({
    where: {
      status: "done",
    },
  });

  // overdue tasks
  const overdueTasks = await prisma.tasks.count({
    where: {
      deadline: {
        lt: new Date(),
      },
      status: {
        not: "done",
      },
    },
  });

  // in-progress tasks
  const inProgressTasks = await prisma.tasks.count({
    where: {
      status: "in-progress",
    },
  });

  return {
    totalTasks,
    completedTasks,
    overdueTasks,
    inProgressTasks,
  };
};

export const getTeamProgressService = async (
  teamId: string
) => {

  const tasks = await prisma.tasks.findMany({
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

  return tasks;
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

  return members.map((member) => {

    const tasks =
      member.users.tasks_tasks_assignee_idTousers;

    return {
      userId: member.users.id,
      fullName: member.users.full_name,
      totalTasks: tasks.length,

      completedTasks: tasks.filter(
        (task) => task.status === "done"
      ).length,

      inProgressTasks: tasks.filter(
        (task) => task.status === "in-progress"
      ).length,
    };
  });
};