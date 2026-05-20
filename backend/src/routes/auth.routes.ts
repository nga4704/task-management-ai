import express from "express";
import {
  register,
  login,
  refresh,
  logout,
} from "../controllers/auth.controller";
import {
  protect,
} from "../middlewares/auth.middleware";
import { validate }
  from "../middlewares/validate.middleware";

import {
  registerSchema,
} from "../validations/auth.validation";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

// REFRESH ACCESS TOKEN
router.post(
  "/refresh",
  validate(registerSchema),
  refresh
);

// LOGOUT
router.post(
  "/logout",
  protect,
  logout
);

export default router;