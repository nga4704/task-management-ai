import { Response } from "express";
import prisma from "../../config/prisma";
import { AuthRequest } from "../../middlewares/auth.middleware";
import { updateProfileService } from "./user.service";
import { AppError } from "../../middlewares/error.middleware";
import { asyncHandler } from "../../utils/asyncHandler";
import { supabase } from "../../config/supabase";
import { v4 as uuidv4 } from "uuid";

export const getMe = asyncHandler(async (req: AuthRequest, res: Response) => {
  if (!req.userId) {
    throw new AppError("Unauthorized", 401);
  }

  const user = await prisma.users.findUnique({
    where: { id: req.userId },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  res.status(200).json(user);
});

export const updateProfile = asyncHandler(async (req: AuthRequest, res: Response) => {
  if (!req.userId) {
    throw new AppError("Unauthorized", 401);
  }

  const { fullName, username } = req.body;

  const updatedUser = await updateProfileService(
    req.userId,
    fullName,
    username
  );

  res.status(200).json({
    message: "Profile updated",
    user: updatedUser,
  });
});

export const uploadAvatar = asyncHandler(async (req: AuthRequest, res: Response) => {
  if (!req.userId) {
    throw new AppError("Unauthorized", 401);
  }

  if (!req.file) {
    throw new AppError("No file uploaded", 400);
  }

  const file = req.file;
  const fileName = `${uuidv4()}-${file.originalname}`;

  // upload to supabase
  const { data, error } = await supabase.storage
    .from("avatars")
    .upload(fileName, file.buffer, {
      contentType: file.mimetype,
    });

  if (error) {
    throw new AppError(error.message, 500);
  }

  // get public url
  const { data: publicUrlData } = supabase.storage
    .from("avatars")
    .getPublicUrl(fileName);

  const avatarUrl = publicUrlData.publicUrl;

  const updatedUser = await prisma.users.update({
    where: { id: req.userId },
    data: { avatar: avatarUrl },
  });

  res.status(200).json({
    message: "Avatar uploaded",
    avatar: avatarUrl,
    user: updatedUser,
  });
});