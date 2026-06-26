import { Request, Response } from "express";
import prisma from "../../config/prisma";

export const getProjectActivities = async (req: Request, res: Response) => {
  let { projectId } = req.params;

  if (Array.isArray(projectId)) {
    projectId = projectId[0];
  }

  if (!projectId) {
    return res.status(400).json({
      message: "projectId is required",
    });
  }

  const activities = await prisma.project_activities.findMany({
    where: {
      project_id: projectId,
    },
    orderBy: {
      created_at: "desc",
    },
    take: 50,
  });

  return res.json({
    success: true,
    data: activities,
  });
};