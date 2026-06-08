import express from "express";
import {
  register,
  login,
  refresh,
  logout,
  googleLogin,
  getMe,
  forgotPasswordController,
  resetPasswordController
} from "./auth.controller";
import {
  protect,
} from "../../middlewares/auth.middleware";
import { validate }
  from "../../middlewares/validate.middleware";

import {
  registerSchema, loginSchema
} from "./auth.validation";
import { z } from "zod";

export const refreshSchema = z.object({
  refreshToken: z.string(),
});

const router = express.Router();

router.post(
  "/register",
  validate(registerSchema),
  register
);

router.post(
  "/login",
  validate(loginSchema),
  login
);

// REFRESH ACCESS TOKEN
router.post(
  "/refresh",
  validate(refreshSchema),
  refresh
);

router.get(
  "/me",
  protect,
  getMe
);

// LOGOUT
router.post(
  "/logout",
  protect,
  logout
);

router.post(
  "/google",
  googleLogin
);

router.post(
  "/forgot-password",
  forgotPasswordController
);

router.post(
  "/reset-password",
  resetPasswordController
);

export default router;