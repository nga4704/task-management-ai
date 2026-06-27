import { Request, Response } from "express";

import {
  getOverviewService,
  getTeamProgressService,
  getRecentActivitiesService,
  getInsightsService,
} from "./dashboard.service";

import { asyncHandler } from "../../utils/asyncHandler";

export const getOverview =
  asyncHandler(async (
    req: Request,
    res: Response
  ) => {

    const teamId =
      req.query.teamId as string;

    if (!teamId) {
      return res.status(400).json({
        message: "teamId is required",
      });
    }

    const overview =
      await getOverviewService(teamId);

    res.json(overview);

  });

export const getTeamProgress =
  asyncHandler(async (
    req: Request,
    res: Response
  ) => {

    const teamId =
      req.params.teamId as string;

    const progress =
      await getTeamProgressService(teamId);

    res.json(progress);

  });

export const getFullDashboard =
  asyncHandler(async (
    req: Request,
    res: Response
  ) => {

    const teamId =
      req.params.teamId as string;

    if (!teamId) {
      return res.status(400).json({
        message: "teamId is required",
      });
    }

    const [
      overview,
      sprintProgress,
      activities,
    ] = await Promise.all([
      getOverviewService(teamId),
      getTeamProgressService(teamId),
      getRecentActivitiesService(teamId),
    ]);

    const insights =
      getInsightsService(
        overview,
        sprintProgress
      );

    res.json({

      overview,

      sprintProgress: {

        totalTasks:
          sprintProgress.totalTasks,

        completedTasks:
          sprintProgress.completedTasks,

        overallProgress:
          sprintProgress.overallProgress,

      },

      tasks:
        sprintProgress.tasks,

      activities,

      insights,

    });

  });