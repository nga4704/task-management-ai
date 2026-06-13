import { Request, Response } from "express";
import * as projectService from "./project.service";

export const createProject = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      name,
      description,
      teamId,
      status,
      startDate,
      endDate,
    } = req.body;

    const project =
      await projectService.createProjectService(
        name,
        description,
        teamId,
        status,
        startDate,
        endDate
      );

    res.status(201).json(project);
  } catch (error: any) {
    res.status(500).json({
      message:
        error.message ||
        "Create project failed",
    });
  }
};

export const getProjects = async (
  req: Request,
  res: Response
) => {
  const projects =
    await projectService.getProjectsService();

  res.json(projects);
};

export const getProjectDetail = async (
  req: Request,
  res: Response
) => {
  const project =
    await projectService.getProjectDetailService(
      req.params.projectId as string
    );

  res.json(project);
};

export const updateProject = async (
  req: Request,
  res: Response
) => {
  const project =
    await projectService.updateProjectService(
      req.params.projectId as string,
      req.body
    );

  res.json(project);
};

export const deleteProject = async (
  req: Request,
  res: Response
) => {
  await projectService.deleteProjectService(
    req.params.projectId as string
  );

  res.json({
    message: "Project deleted",
  });
};

export const getProjectsDashboard =
  async (
    req: Request,
    res: Response
  ) => {
    const data =
      await projectService.getProjectsDashboardService();

    res.json(data);
  };

export const getProjectsActivity =
  async (
    req: Request,
    res: Response
  ) => {
    const data =
      await projectService.getProjectsActivityService();

    res.json(data);
  };