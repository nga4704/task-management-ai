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

// create task
router.post("/", protect, createTask);

// get all tasks
router.get("/", protect, getTasks);

// get task detail
router.get("/:taskId", protect, getTaskDetail);

// update task
router.put("/:taskId", protect, updateTask);

// delete task
router.delete("/:taskId", protect, deleteTask);

// update status
router.patch(
  "/:taskId/status",
  protect,
  updateTaskStatus
);

// update progress
router.patch(
  "/:taskId/progress",
  protect,
  updateTaskProgress
);

// assign task
router.patch(
  "/:taskId/assign",
  protect,
  assignTask
);

export default router;