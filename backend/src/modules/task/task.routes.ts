import express from "express";

import {
  createTask,
  getTasks,
  getTaskDetail,
  updateTask,
  deleteTask,
  updateTaskStatus,
  updateTaskProgress,
  assignTask,
} from "./task.controller";

import { protect } from "../../middlewares/auth.middleware";

const router = express.Router();

router.post("/", protect, createTask);

router.get("/", protect, getTasks);

router.get("/:taskId", protect, getTaskDetail);

router.put("/:taskId", protect, updateTask);

router.delete("/:taskId", protect, deleteTask);

router.patch("/:taskId/status", protect, updateTaskStatus);

router.patch("/:taskId/progress", protect, updateTaskProgress);

router.patch("/:taskId/assign", protect, assignTask);

router.patch(
  "/:taskId/move",
  protect,
  updateTaskStatus
);

export default router;