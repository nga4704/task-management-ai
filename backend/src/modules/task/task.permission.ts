import prisma from "../../config/prisma";
import { AppError } from "../../middlewares/error.middleware";

export const assertTeamMember = async (teamId: string, userId: string) => {
  const member = await prisma.team_members.findFirst({
    where: {
      team_id: teamId,
      user_id: userId,
    },
  });

  if (!member) throw new AppError("Forbidden", 403);

  return member;
};

export const assertProjectAccess = async (projectId: string, userId: string) => {
  const project = await prisma.projects.findUnique({
    where: { id: projectId },
    include: {
      teams: {
        include: {
          team_members: true,
        },
      },
    },
  });

  if (!project) throw new AppError("Project not found", 404);

  const isMember = project.teams.team_members.some(
    (m) => m.user_id === userId
  );

  if (!isMember) throw new AppError("Forbidden", 403);

  return project;
};