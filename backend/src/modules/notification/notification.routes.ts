import express from "express";

import {
  getNotifications,
  markAsRead,
} from "./notification.controller";

import { protect } from "../../middlewares/auth.middleware";

const router = express.Router();

// get notifications
router.get(
  "/",
  protect,
  getNotifications
);

// mark as read
router.patch(
  "/:notificationId/read",
  protect,
  markAsRead
);

export default router;