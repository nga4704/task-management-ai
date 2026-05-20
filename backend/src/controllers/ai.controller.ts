import { Request, Response } from "express";

import {
  predictOverdueService,
  scheduleRecommendationService,
} from "../services/ai.service";

import { asyncHandler } from "../utils/asyncHandler";

// PREDICT OVERDUE
export const predictOverdue = asyncHandler(async (
  req: Request,
  res: Response
) => {

    const taskId =
      req.body.taskId as string;

    const result =
      await predictOverdueService(
        taskId
      );

    res.status(200).json(result);

  } );

export const scheduleRecommendation =
  asyncHandler(async (
    req: Request,
    res: Response
  ) => {

    const teamId =
        req.body.teamId as string;

      const userId =
        req.body.userId as string;

      const result =
        await scheduleRecommendationService(
          teamId,
          userId
        );

      res.status(200).json(result);

    } );