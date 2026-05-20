import { Request, Response } from "express";

import {
  predictOverdueService,
  scheduleRecommendationService,
} from "../services/ai.service";

export const predictOverdue = async (
  req: Request,
  res: Response
) => {

  try {

    const taskId =
      req.body.taskId as string;

    const result =
      await predictOverdueService(
        taskId
      );

    res.json(result);

  } catch (error) {

    res.status(500).json({
      message: "AI prediction failed",
    });
  }
};

export const scheduleRecommendation =
  async (
    req: Request,
    res: Response
  ) => {

    try {

      const teamId =
        req.body.teamId as string;

      const userId =
        req.body.userId as string;

      const result =
        await scheduleRecommendationService(
          teamId,
          userId
        );

      res.json(result);

    } catch (error) {

      res.status(500).json({
        message:
          "Schedule recommendation failed",
      });
    }
  };