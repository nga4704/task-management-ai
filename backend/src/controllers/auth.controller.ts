import { Request, Response } from "express";
import {
  registerUser,
  loginUser,
  refreshAccessToken,
  logoutUser,
} from "../services/auth.service";

import { AuthRequest } from "../middlewares/auth.middleware";
import { asyncHandler } from "../utils/asyncHandler";
import {AppError} from "../middlewares/error.middleware";

// REGISTER
export const register = asyncHandler(async (req: Request, res: Response) => {
  const { username, email, password, fullName } = req.body;

  const user = await registerUser(username, email, password, fullName);

  res.status(201).json({
    message: "Register successfully",
    user,
  });
});

// LOGIN
export const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const data = await loginUser(email, password);

  res.status(200).json(data);
});

// REFRESH
export const refresh = asyncHandler(async (req: Request, res: Response) => {
  const { refreshToken } = req.body;

  const data = await refreshAccessToken(refreshToken);

  res.status(200).json(data);
});

// LOGOUT
export const logout = asyncHandler(async (req: AuthRequest, res: Response) => {

  if (!req.userId) {
    throw new AppError("Unauthorized", 401);
  }

  const data = await logoutUser(req.userId);

  res.status(200).json(data);
});