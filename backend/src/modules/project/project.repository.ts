import prisma from "../../config/prisma";

export const findProjects = async (teamId?: string) => {
  return prisma.projects.findMany({
    where: teamId ? { team_id: teamId } : undefined,
    include: {
      tasks: true,
      teams: {
        include: {
          team_members: true,
        },
      },
    },
    orderBy: {
      created_at: "desc",
    },
  });
};

export const findProjectById =
async (
  projectId: string
) => {
  return prisma.projects.findUnique({
    where: {
      id: projectId,
    },

    include: {
      tasks: true,

      teams: {
        include: {
          team_members: {
            include: {
              users: true,
            },
          },
        },
      },
    },
  });
};