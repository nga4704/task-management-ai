import { Request, Response } from "express";

import {
  getTaskActivityLogsService,
} from "../services/activityLog.service";
import { asyncHandler } from "../utils/asyncHandler";

export const getTaskActivityLogs =
  asyncHandler(async (
    req: Request,
    res: Response
  ) => {
      const taskId =
        req.params.taskId as string;

      const logs =
        await getTaskActivityLogsService(
          taskId
        );

      res.status(200).json(logs);

    } );