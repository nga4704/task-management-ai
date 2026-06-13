import express from "express";
import {
  getMe,
} from "./auth.controller";
import {
  protect,
} from "../../middlewares/auth.middleware";
import { z } from "zod";

export const refreshSchema = z.object({
  refreshToken: z.string(),
});

const router = express.Router();

router.get(
  "/me",
  protect,
  getMe
);

export default router;