// src/modules/user/user.controller.ts

import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

import prisma from "../../config/prisma";
import { supabase } from "../../config/supabase";

import { AuthRequest } from "../../middlewares/auth.middleware";
import { AppError } from "../../middlewares/error.middleware";

import { asyncHandler } from "../../utils/asyncHandler";

import {
  updateProfileService,
} from "./user.service";

export const createProfile =
  asyncHandler(
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

      const {
        email,
        username,
        fullName,
      } = req.body;

      const id =
        req.user.id;

      // check user already exists
      const existing =
        await prisma.users.findUnique({
          where: {
            id,
          },
        });

      if (existing) {
        return res.status(200).json(
          existing
        );
      }

      // generate username fallback
      const finalUsername =
        username?.trim()
          ? username
          : email.split("@")[0];

      // check username exists
      const usernameExists =
        await prisma.users.findUnique({
          where: {
            username:
              finalUsername,
          },
        });

      if (usernameExists) {
        throw new AppError(
          "Username already exists",
          400
        );
      }

      const user =
        await prisma.users.create({
          data: {
            id,
            email,
            username:
              finalUsername,
            full_name:
              fullName || "",
          },
        });

      res.status(201).json(
        user
      );
    }
  );

// ==============================
// GET CURRENT USER
// ==============================

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

// ==============================
// UPDATE PROFILE
// ==============================

export const updateProfile =
  asyncHandler(
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

      const {
        fullName,
        username,
      } = req.body;

      if (!fullName || !username) {
        throw new AppError(
          "Full name and username are required",
          400
        );
      }

      const updatedUser =
        await updateProfileService(
          req.user.id,
          fullName,
          username
        );

      res.status(200).json({
        message:
          "Profile updated successfully",

        user:
          updatedUser,
      });
    }
  );

// ==============================
// UPLOAD AVATAR
// ==============================

export const uploadAvatar =
  asyncHandler(
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

      if (!req.file) {
        throw new AppError(
          "No file uploaded",
          400
        );
      }

      const file =
        req.file;

      // validate file type
      const allowedMimeTypes = [
        "image/png",
        "image/jpeg",
        "image/jpg",
        "image/webp",
      ];

      if (
        !allowedMimeTypes.includes(
          file.mimetype
        )
      ) {
        throw new AppError(
          "Invalid image format",
          400
        );
      }

      // validate file size (2MB)
      const maxSize =
        2 * 1024 * 1024;

      if (file.size > maxSize) {
        throw new AppError(
          "Image size must be less than 2MB",
          400
        );
      }

      const fileName =
        `${uuidv4()}-${file.originalname}`;

      // upload image to supabase storage
      const {
        error,
      } = await supabase.storage

        .from("avatars")

        .upload(
          fileName,
          file.buffer,
          {
            contentType:
              file.mimetype,
          }
        );

      if (error) {
        throw new AppError(
          error.message,
          500
        );
      }

      // get public url
      const {
        data: publicUrlData,
      } = supabase.storage

        .from("avatars")

        .getPublicUrl(
          fileName
        );

      const avatarUrl =
        publicUrlData.publicUrl;

      // update database
      const updatedUser =
        await prisma.users.update({
          where: {
            id: req.user.id,
          },

          data: {
            avatar:
              avatarUrl,
          },
        });

      res.status(200).json({
        message:
          "Avatar uploaded successfully",

        avatar:
          avatarUrl,

        user:
          updatedUser,
      });
    }
  );