import { Request, Response } from "express";
import { AuthRequest } from "../middlewares/auth.middleware";
import {AppError} from "../middlewares/error.middleware";
import {
  createTaskService,
  getTasksService,
  getTaskDetailService,
  updateTaskService,
  deleteTaskService,
  updateTaskStatusService,
  updateTaskProgressService,
  assignTaskService,
} from "../services/task.service";

import { asyncHandler } from "../utils/asyncHandler";

export const createTask = asyncHandler(async (
  req: AuthRequest,
  res: Response
) => {

    if (!req.userId) {
      throw new AppError("Unauthorized", 401);
    }

    const {
      teamId,
      title,
      description,
      priority,
      deadline,
      assigneeId,
    } = req.body;

    const task = await createTaskService({
      teamId,
      title,
      description,
      priority,
      deadline,
      assigneeId,
      createdBy: req.userId,
    });

    res.status(201).json({
      message: "Create task successfully",
      task,
    });

}); 

export const getTasks = asyncHandler(async (
  req: Request,
  res: Response
) => {

    const { teamId, status, priority } = req.query;

    const tasks = await getTasksService({
      teamId: teamId as string,
      status: status as string,
      priority: priority as string,
    });

    res.status(200).json(tasks);

  } );

export const getTaskDetail = asyncHandler(async (
  req: Request,
  res: Response
) => {

    const taskId = req.params.taskId as string;

    const task = await getTaskDetailService(taskId);

    if (!task) {
      throw new AppError("Task not found", 404);
    }

    res.json(task);

});

export const updateTask = asyncHandler(async (
  req: Request,
  res: Response
) => {

    const taskId = req.params.taskId as string;

    const task = await updateTaskService(
      taskId,
      req.body
    );

    res.status(200).json({
      message: "Update task successfully",
      task,
    });

  } );

export const deleteTask = asyncHandler(async (
  req: Request,
  res: Response
) => {

   const taskId = req.params.taskId as string;

    await deleteTaskService(taskId);

    res.status(200).json({
      message: "Delete task successfully",
    });

  } );

export const updateTaskStatus = asyncHandler(async (
  req: Request,
  res: Response
) => {

   const taskId = req.params.taskId as string;

    const { status } = req.body;

    const task = await updateTaskStatusService(
      taskId,
      status
    );

    res.status(200).json({
      message: "Update status successfully",
      task,
    });

  } );

export const updateTaskProgress = asyncHandler(async (
  req: AuthRequest,
  res: Response
) => {

    const taskId = req.params.taskId as string;

    const { progress } = req.body;

    const task = await updateTaskProgressService(
      taskId,
      progress,
      req.userId as string
    );

    res.status(200).json({
      message: "Update progress successfully",
      task,
    });

  } );

export const assignTask = asyncHandler(async (
  req: Request,
  res: Response
) => {

    const taskId = req.params.taskId as string;

    const { assigneeId } = req.body;

    const task = await assignTaskService(
      taskId,
      assigneeId
    );

    res.status(200).json({
      message: "Assign task successfully",
      task,
    });

  } );