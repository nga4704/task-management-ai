import { Response } from "express";
import { AuthRequest } from "../../middlewares/auth.middleware";

import {
  getNotificationsService,
  markAsReadService,
  createNotification
} from "./notification.service";

import { asyncHandler } from "../../utils/asyncHandler";
import { AppError } from "../../middlewares/error.middleware";

export const getNotifications = asyncHandler(async (req: AuthRequest, res: Response) => {
  if (!req.user) {
    throw new AppError("Unauthorized", 401);
  }

  const notifications = await getNotificationsService(req.user.id);

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

export const createNotificationController = async (
  req: AuthRequest,
  res: Response
) => {
  const { receiver_id, sender_id, type, title, message } = req.body;

  const notification = await createNotification({
    receiverId: receiver_id,
    senderId: sender_id,
    type,
    title,
    message,
  });

  res.status(201).json(notification);
};