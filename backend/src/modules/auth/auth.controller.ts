import { Request, Response } from "express";
import {
  registerUser,
  loginUser,
  refreshAccessToken,
  logoutUser,
  loginGoogle,
  forgotPassword,
  resetPassword
} from "./auth.service";

import { AuthRequest } from "../../middlewares/auth.middleware";
import { asyncHandler } from "../../utils/asyncHandler";
import { AppError } from "../../middlewares/error.middleware";
import prisma from "../../config/prisma";

// REGISTER
export const register = asyncHandler(async (req: Request, res: Response) => {
  const { username, email, password, fullName } = req.body;

  const user = await registerUser(username, email, password, fullName);

  res.status(201).json({
    message: "Register successfully",
  });
});

// LOGIN
export const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const data = await loginUser(email, password);

  res.status(200).json({
    accessToken: data.accessToken,
    refreshToken: data.refreshToken,
    user: data.user,
  });
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

// GOOGLE LOGIN
export const googleLogin =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {

      const {
        credential
      } = req.body;

      const data =
        await loginGoogle(
          credential
        );

      res.status(200).json({
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
        user: data.user,
      });
    }
  );

// GET USER
export const getMe =
  asyncHandler(
    async (
      req: AuthRequest,
      res: Response
    ) => {

      const user =
        await prisma.users.findUnique({
          where: {
            id: req.userId,
          },
        });

      res.json(user);
    }
  );

// FORGOT PASSWORD
export const forgotPasswordController =
asyncHandler(async (
  req,
  res
) => {

  const { email } =
    req.body;

  const token =
    await forgotPassword(
      email
    );

  res.json({
    message:
      "Reset link sent",
    token
  });
});

// RESET PASSWORD
export const resetPasswordController =
asyncHandler(async (
  req,
  res
) => {

  const {
    token,
    password
  } = req.body;

  await resetPassword(
    token,
    password
  );

  res.json({
    message:
      "Password updated"
  });
});