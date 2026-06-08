import { Response } from "express";
import { AuthRequest } from "../../middlewares/auth.middleware";

import {
  getNotificationsService,
  markAsReadService,
} from "./notification.service";

import { asyncHandler } from "../../utils/asyncHandler";
import { AppError } from "../../middlewares/error.middleware";

export const getNotifications = asyncHandler(async (req: AuthRequest, res: Response) => {
  if (!req.userId) {
    throw new AppError("Unauthorized", 401);
  }

  const notifications = await getNotificationsService(req.userId);

  res.status(200).json(notifications);
});

export const markAsRead = asyncHandler(async (req: AuthRequest, res: Response) => {
  const notificationId = req.params.notificationId as string;

  const notification = await markAsReadService(notificationId);

  res.status(200).json({
    message: "Notification marked as read",
    notification,
  });
});