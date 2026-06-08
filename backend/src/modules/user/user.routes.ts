import express from "express";
import { getMe, updateProfile, uploadAvatar, } from "./user.controller";
import { protect } from "../../middlewares/auth.middleware";
import upload from "../../config/multer";

const router = express.Router();

// GET CURRENT USER
router.get("/me", protect, getMe);

// UPDATE PROFILE
router.put(
  "/profile",
  protect,
  updateProfile
);

// UPLOAD AVATAR
router.post(
  "/avatar",
  protect,
  upload.single("avatar"),
  uploadAvatar
);

export default router;