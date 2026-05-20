import { Request, Response } from "express";

import {
  getOverviewService,
  getTeamProgressService,
  getWorkloadService,
} from "../services/dashboard.service";

export const getOverview = async (
  req: Request,
  res: Response
) => {

  try {

    const overview = await getOverviewService();

    res.json(overview);

  } catch (error) {

    res.status(500).json({
      message: "Server error",
    });
  }
};

export const getTeamProgress = async (
  req: Request,
  res: Response
) => {

  try {

    const teamId  = req.params.teamId as string;

    const tasks = await getTeamProgressService(
      teamId
    );

    res.json(tasks);

  } catch (error) {

    res.status(500).json({
      message: "Server error",
    });
  }
};

export const getWorkload = async (
  req: Request,
  res: Response
) => {

  try {

     const teamId  = req.params.teamId as string;

    const workload = await getWorkloadService(
      teamId
    );

    res.json(workload);

  } catch (error) {

    res.status(500).json({
      message: "Server error",
    });
  }
};