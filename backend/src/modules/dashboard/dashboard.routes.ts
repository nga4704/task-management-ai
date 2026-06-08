import express from "express";

import {
  getOverview,
  getTeamProgress,
  getWorkload,
} from "./dashboard.controller";

import { protect } from "../../middlewares/auth.middleware";

const router = express.Router();

// overview dashboard
router.get(
  "/overview",
  protect,
  getOverview
);

// team progress
router.get(
  "/team-progress/:teamId",
  protect,
  getTeamProgress
);

// workload
router.get(
  "/workload/:teamId",
  protect,
  getWorkload
);

export default router;