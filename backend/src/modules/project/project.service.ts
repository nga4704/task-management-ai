import prisma from "../../config/prisma";
import { getIO } from "../../config/socket";

export const createProjectService = async (
  name: string,
  description: string,
  teamId: string,
  startDate?: Date,
  endDate?: Date
) => {
  const project = await prisma.projects.create({
    data: {
      name,
      description,
      team_id: teamId,
      start_date: startDate,
      end_date: endDate,
    },
  });

  getIO().emit("projectCreated", project);

  return project;
};

export const getProjectsService = async () => {
  return prisma.projects.findMany({
    include: {
      teams: true,
    },
  });
};

export const getProjectDetailService = async (
  projectId: string
) => {
  return prisma.projects.findUnique({
    where: {
      id: projectId,
    },
    include: {
      teams: true,
    },
  });
};

export const updateProjectService = async (
  projectId: string,
  data: any
) => {
  const project = await prisma.projects.update({
    where: {
      id: projectId,
    },
    data,
  });

  getIO().emit("projectUpdated", project);

  return project;
};

export const deleteProjectService = async (
  projectId: string
) => {
  const project = await prisma.projects.delete({
    where: {
      id: projectId,
    },
  });

  getIO().emit("projectDeleted", projectId);

  return project;
};