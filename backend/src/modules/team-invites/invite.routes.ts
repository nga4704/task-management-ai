import { Router } from "express";
import {
  createInvite,
  acceptInvite,
} from "./invite.controller";

import { protect } from "../../middlewares/auth.middleware";

const router = Router();

router.post("/:teamId/invite", protect, createInvite);

router.post("/accept/:token", protect, acceptInvite);

export default router;