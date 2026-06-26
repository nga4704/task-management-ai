import prisma from "../../config/prisma";
import { AppError } from "../../middlewares/error.middleware";
import { getIO } from "../../config/socket";
import { ProjectStatus } from "@prisma/client";
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

type UpdateProjectDto = {
  name?: string;
  description?: string;
  status?: ProjectStatus;
  startDate?: Date;
  endDate?: Date;
};

export const createProjectService =
  async (
    name: string,
    description: string,
    teamId: string,
    status: ProjectStatus,
    startDate?: Date,
    endDate?: Date
  ) => {

    const team =
      await prisma.teams.findUnique({
        where: {
          id: teamId
        }
      });

    if (!team) {
      throw new AppError(
        "Team not found",
        404
      );
    }

    if (!name?.trim()) {
      throw new AppError(
        "Project name is required",
        400
      );
    }

    if (!description?.trim()) {
      throw new AppError(
        "Project description is required",
        400
      );
    }

    if (
      startDate &&
      endDate &&
      new Date(startDate) >
      new Date(endDate)
    ) {
      throw new AppError(
        "Start date must be before end date",
        400
      );
    }

    const project =
      await prisma.projects.create({
        data: {
          name,
          description,

          team_id: teamId,
          status: status as ProjectStatus,
          start_date:
            startDate,

          end_date:
            endDate,
        },
      });

    // getIO().emit(
    //   "projectCreated",
    //   project
    // );

    return project;
  };

export const getProjectsService =
  async (
    teamId?: string
  ) => {

    const projects =
      await findProjects(teamId);

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

      teamId: project.team_id,

      tasks: project.tasks,

      members:
        project.teams
          ?.team_members || [],
    };
  };

export const updateProjectService =
  async (
    projectId: string,
    userId: string,
    data: UpdateProjectDto,

  ) => {
    const project = await prisma.projects.findUnique({
      where: { id: projectId },
      include: {
        teams: true,
      },
    });

    if (!project) {
      throw new Error("Project not found");
    }

    // 🔒 OWNER CHECK
    if (project.teams.owner_id !== userId) {
      throw new Error("Forbidden: Only owner can update project");
    }

    const {
      name,
      description,
      status,
      startDate,
      endDate,
    } = data;

    if (
      startDate &&
      endDate &&
      new Date(startDate) >
      new Date(endDate)
    ) {
      throw new AppError(
        "Start date must be before end date",
        400
      );
    }

    const updated = await prisma.projects.update({
      where: { id: projectId },
      data: {
        ...(name !== undefined && { name }),
        ...(description !== undefined && { description }),
        ...(status !== undefined && { status }),
        ...(startDate !== undefined && {
          start_date: new Date(startDate),
        }),

        ...(endDate !== undefined && {
          end_date: new Date(endDate),
        }),
      },
    });

    // getIO().emit("projectUpdated", updated);

    return updated;
  };

export const deleteProjectService = async (
  projectId: string,
  userId: string
) => {
  const project = await prisma.projects.findUnique({
    where: { id: projectId },
    include: {
      teams: true,
    },
  });

  if (!project) {
    throw new AppError("Project not found", 404);
  }

  const team = await prisma.teams.findUnique({
    where: { id: project.team_id },
  });

  if (!team) {
    throw new AppError("Team not found", 404);
  }

  // ONLY OWNER CAN DELETE
  if (team.owner_id !== userId) {
    throw new AppError("Only owner can delete project", 403);
  }

  await prisma.projects.delete({
    where: { id: projectId },
  });

  // getIO().emit("projectDeleted", projectId);

  return { success: true };
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
          p.status === "IN_PROGRESS"
      ).length;

    const completedProjects =
      projects.filter(
        (p) =>
          p.status ===
          "COMPLETED"
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

  export const getProjectTasksService = async (projectId: string) => {
  return prisma.tasks.findMany({
    where: { project_id: projectId },
    include: {
      users_tasks_assignee_idTousers: true,
      task_progress: true,
    },
    orderBy: { created_at: "desc" },
  });
};

export const getProjectActivitiesService = async (
  projectId: string
) => {
  return prisma.project_activities.findMany({
    where: {
      project_id: projectId,
    },
    orderBy: {
      created_at: "desc",
    },
  });
};