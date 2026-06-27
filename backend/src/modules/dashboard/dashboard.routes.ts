import express from "express";

import {
  getOverview,
  getTeamProgress,
  getFullDashboard,
} from "./dashboard.controller";

import {
  protect,
} from "../../middlewares/auth.middleware";

const router = express.Router();

router.get(
  "/overview",
  protect,
  getOverview
);

router.get(
  "/team-progress/:teamId",
  protect,
  getTeamProgress
);

router.get(
  "/full/:teamId",
  protect,
  getFullDashboard
);

export default router;