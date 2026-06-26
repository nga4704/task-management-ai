import { Request, Response } from "express";

import {
  getOverviewService,
  getTeamProgressService,
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
        message:
          "teamId is required",
      });
    }

    const overview =
      await getOverviewService(
        teamId
      );

    res.status(200).json(
      overview
    );
  });

export const getTeamProgress = asyncHandler(async (
  req: Request,
  res: Response
) => {

  const teamId = req.params.teamId as string;

  const tasks = await getTeamProgressService(
    teamId
  );

  res.status(200).json(tasks);

});
