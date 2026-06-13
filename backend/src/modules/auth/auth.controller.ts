import { Response } from "express";

import { AuthRequest } from "../../middlewares/auth.middleware";
import { asyncHandler } from "../../utils/asyncHandler";
import { AppError } from "../../middlewares/error.middleware";
import prisma from "../../config/prisma";

// GET USER
export const getMe = asyncHandler(
  async (
    req: AuthRequest,
    res: Response
  ) => {

    if (!req.user?.id) {
      throw new AppError(
        "Unauthorized",
        401
      );
    }

    const user =
      await prisma.users.findUnique({
        where: {
          id: req.user.id,
        },
      });

    if (!user) {
      throw new AppError(
        "User not found",
        404
      );
    }

    res.status(200).json(user);
  }
);