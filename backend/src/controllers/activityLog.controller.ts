import { Request, Response } from "express";

import {
  getTaskActivityLogsService,
} from "../services/activityLog.service";

export const getTaskActivityLogs =
  async (
    req: Request,
    res: Response
  ) => {

    try {

      const taskId =
        req.params.taskId as string;

      const logs =
        await getTaskActivityLogsService(
          taskId
        );

      res.json(logs);

    } catch (error) {

      res.status(500).json({
        message: "Server error",
      });
    }
  };