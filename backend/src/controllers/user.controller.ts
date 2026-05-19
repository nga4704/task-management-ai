import { Response } from "express";
import prisma from "../config/prisma";
import { AuthRequest } from "../middlewares/auth.middleware";
import {
  updateProfileService,
} from "../services/user.service";

// GET CURRENT USER
export const getMe = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const user = await prisma.users.findUnique({
      where: {
        id: req.userId,
      },
    });

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};

// UPDATE PROFILE
export const updateProfile = async (
  req: AuthRequest,
  res: Response
) => {

  try {

    const {
      fullName,
      username,
    } = req.body;

    const updatedUser =
      await updateProfileService(
        req.userId!,
        fullName,
        username
      );

    res.status(200).json({
      message: "Profile updated",
      user: updatedUser,
    });

  } catch (error: any) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// UPLOAD AVATAR
export const uploadAvatar = async (
  req: AuthRequest,
  res: Response
) => {

  try {

    // file upload
    const file = req.file;

    if (!file) {

      return res.status(400).json({
        message: "No file uploaded",
      });

    }

    // update avatar url
    const updatedUser =
      await prisma.users.update({

        where: {
          id: req.userId,
        },

        data: {
          avatar: file.path,
        },
      });

    res.status(200).json({
      message: "Avatar uploaded",
      avatar: file.path,
      user: updatedUser,
    });

  } catch (error: any) {

    res.status(500).json({
      message: error.message,
    });

  }
};