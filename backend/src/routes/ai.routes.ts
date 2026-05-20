import express from "express";

import {
  predictOverdue,
  scheduleRecommendation,
} from "../controllers/ai.controller";

import { protect } from "../middlewares/auth.middleware";

const router = express.Router();

// predict overdue
router.post(
  "/predict-overdue",
  protect,
  predictOverdue
);

// schedule recommendation
router.post(
  "/schedule-recommendation",
  protect,
  scheduleRecommendation
);

export default router;