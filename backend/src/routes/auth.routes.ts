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

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

// REFRESH ACCESS TOKEN
router.post(
  "/refresh",
  refresh
);

// LOGOUT
router.post(
  "/logout",
  protect,
  logout
);

export default router;