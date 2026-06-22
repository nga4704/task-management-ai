import { Request, Response } from "express";
import * as projectService from "./project.service";
import { AuthRequest } from "../../middlewares/auth.middleware";

export const createProject = async (req: any, res: Response) => {
  try {
    const teamId = req.params.teamId; 
    const {
      name,
      description,
      status,
      startDate,
      endDate,
    } = req.body;

    const project = await projectService.createProjectService(
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
      message: error.message || "Create project failed",
    });
  }
};

export const getProjects = async (
  req: AuthRequest,
  res: Response
) => {
  const projects =
    await projectService.getProjectsService(
      req.params.teamId as string
    );

  res.json(projects);
};

export const getProjectDetail = async (
  req: AuthRequest,
  res: Response
) => {
  const project =
    await projectService.getProjectDetailService(
      req.params.projectId as string
    );

  res.json(project);
};

export const updateProject = async (
  req: AuthRequest,
  res: Response
) => {
  if (!req.user?.id) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const project = await projectService.updateProjectService(
    req.params.projectId as string,
    req.user.id,
    req.body
  );

  res.json(project);
};

export const deleteProject = async (
  req: AuthRequest,
  res: Response
) => {
  if (!req.user?.id) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  await projectService.deleteProjectService(
    req.params.projectId as string,
    req.user.id
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