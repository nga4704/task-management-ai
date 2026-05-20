import { Response } from "express";

import { AuthRequest } from "../middlewares/auth.middleware";

import {
  getNotificationsService,
  markAsReadService,
} from "../services/notification.service";

export const getNotifications = async (
  req: AuthRequest,
  res: Response
) => {

  try {

    const notifications =
      await getNotificationsService(
        req.userId!
      );

    res.json(notifications);

  } catch (error) {

    res.status(500).json({
      message: "Server error",
    });
  }
};

export const markAsRead = async (
  req: AuthRequest,
  res: Response
) => {

  try {

    const notificationId = req.params.notificationId as string;

    const notification =
      await markAsReadService(
        notificationId
      );

    res.json({
      message: "Notification marked as read",
      notification,
    });

  } catch (error) {

    res.status(500).json({
      message: "Server error",
    });
  }
};