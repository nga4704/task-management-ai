import prisma from "../../config/prisma";

import { getIO } from "../../config/socket";

import {
  findProjects,
  findProjectById,
} from "./project.repository";

import {
  mapProjectList,
} from "./project.mapper";
import {
  calculateAIScore,
} from "./project.utils";

export const createProjectService =
  async (
    name: string,
    description: string,
    teamId: string,
    status: string,
    startDate?: Date,
    endDate?: Date
  ) => {
    const project =
      await prisma.projects.create({
        data: {
          name,
          description,

          team_id: teamId,
          status,
          start_date:
            startDate,

          end_date:
            endDate,
        },
      });

    getIO().emit(
      "projectCreated",
      project
    );

    return project;
  };

export const getProjectsService =
  async () => {
    const projects =
      await findProjects();

    return projects.map(
      mapProjectList
    );
  };

export const getProjectDetailService =
  async (
    projectId: string
  ) => {
    const project =
      await findProjectById(
        projectId
      );

    if (!project) {
      throw new Error(
        "Project not found"
      );
    }

    return {
      ...mapProjectList(project),

      tasks: project.tasks,

      members:
        project.teams
          ?.team_members || [],
    };
  };

export const updateProjectService =
  async (
    projectId: string,
    data: any
  ) => {
    const project =
      await prisma.projects.update({
        where: {
          id: projectId,
        },

        data,
      });

    getIO().emit(
      "projectUpdated",
      project
    );

    return project;
  };

export const deleteProjectService =
  async (
    projectId: string
  ) => {
    await prisma.projects.delete({
      where: {
        id: projectId,
      },
    });

    getIO().emit(
      "projectDeleted",
      projectId
    );

    return {
      success: true,
    };
  };


export const getProjectsActivityService =
  async () => {
    const projects =
      await prisma.projects.findMany({
        orderBy: {
          created_at: "desc",
        },

        take: 10,

        include: {
          teams: true,
        },
      });

    return projects.map(
      (project) => ({
        id: project.id,

        user:
          project.teams.name,

        action:
          "created project",

        createdAt:
          project.created_at,
      })
    );
  };

export const getProjectsDashboardService =
  async () => {
    const projects =
      await prisma.projects.findMany({
        include: {
          tasks: true,

          teams: {
            include: {
              team_members: true,
            },
          },
        },
      });

    const totalProjects =
      projects.length;

    const activeProjects =
      projects.filter(
        (p) =>
          p.status === "active"
      ).length;

    const completedProjects =
      projects.filter(
        (p) =>
          p.status ===
          "completed"
      ).length;

    const totalMembers =
      projects.reduce(
        (sum, project) =>
          sum +
          (project.teams
            ?.team_members
            ?.length || 0),
        0
      );

    const productivity =
      totalProjects === 0
        ? 0
        : Math.round(
          projects.reduce(
            (sum, project) =>
              sum +
              calculateAIScore(
                project.tasks
              ),
            0
          ) / totalProjects
        );

    return {
      totalProjects,

      activeProjects,

      completedProjects,

      totalMembers,

      productivity,
    };
  };