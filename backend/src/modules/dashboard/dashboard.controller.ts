import { Request, Response } from "express";

import {
  getOverviewService,
  getTeamProgressService,
  getWorkloadService,
} from "../services/dashboard.service";
import { asyncHandler } from "../utils/asyncHandler";

export const getOverview = asyncHandler(async (
  req: Request,
  res: Response
) => {

    const overview = await getOverviewService();

    res.status(200).json(overview);

  } );

export const getTeamProgress = asyncHandler(async (
  req: Request,
  res: Response
) => {
    
  const teamId  = req.params.teamId as string;

    const tasks = await getTeamProgressService(
      teamId
    );

    res.status(200).json(tasks);

  } );

export const getWorkload = asyncHandler(async (
  req: Request,
  res: Response
) => {

     const teamId  = req.params.teamId as string;

    const workload = await getWorkloadService(
      teamId
    );

    res.status(200).json(workload);

  } );