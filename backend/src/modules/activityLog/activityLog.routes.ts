import express from "express";

import {
  getTaskActivityLogs,
} from "../controllers/activityLog.controller";

import { protect } from "../../middlewares/auth.middleware";

const router = express.Router();

// get activity logs
router.get("/:taskId", protect, getTaskActivityLogs);

export default router;