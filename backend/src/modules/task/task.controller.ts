import { Request, Response } from "express";
import { AuthRequest } from "../../middlewares/auth.middleware";
import { AppError } from "../../middlewares/error.middleware";
import {
  createTaskService,
  getTasksService,
  getTaskDetailService,
  updateTaskService,
  deleteTaskService,
  updateTaskStatusService,
  updateTaskProgressService,
  assignTaskService,
} from "./task.service";

import { asyncHandler } from "../../utils/asyncHandler";
import { mapTaskStatusToPrisma } from "./task.mapper";

export const createTask = asyncHandler(async (
  req: AuthRequest,
  res: Response
) => {

  if (!req.user) {
    throw new AppError("Unauthorized", 401);
  }

  const {
    team_id,
    project_id,
    title,
    description,
    priority,
    deadline,
    assignee_id,
    estimated_hours,
  } = req.body;

  const task = await createTaskService({
    teamId: team_id,
    projectId: project_id,
    title,
    description,
    priority,
    deadline,
    assigneeId: assignee_id,
    createdBy: req.user.id,
    estimatedHours:
      estimated_hours,
  });

  res.status(201).json({
    message: "Create task successfully",
    task,
  });

});

export const getTasks = asyncHandler(async (
  req: AuthRequest,
  res: Response
) => {

  const {
    team_id,
    project_id,
    status,
    priority,
  } = req.query;

  const userId = req.user?.id;

  const tasks = await getTasksService({
    teamId: team_id as string,
    projectId: project_id as string,
    status: status as string,
    priority: priority as string,
    userId,
  });

  res.status(200).json(tasks);
});

export const getTaskDetail = asyncHandler(async (
  req: AuthRequest,
  res: Response
) => {

  const taskId = req.params.taskId as string;

  const task =
    await getTaskDetailService(
      taskId,
      req.user?.id as string
    );

  if (!task) {
    throw new AppError("Task not found", 404);
  }

  res.json({
    success: true,
    data: task,
  });

});

export const updateTask = asyncHandler(async (
  req: AuthRequest,
  res: Response
) => {

  const taskId = req.params.taskId as string;

  const task = await updateTaskService(
    taskId,
    req.body,
    req.user?.id as string
  );

  res.status(200).json({
    success: true,
    data: task,
  });

});

export const deleteTask = asyncHandler(async (
  req: AuthRequest,
  res: Response
) => {

  const taskId = req.params.taskId as string;

  await deleteTaskService(
    taskId,
    req.user?.id as string
  );

  res.status(200).json({
    message: "Delete task successfully",
  });

});

export const updateTaskStatus = asyncHandler(async (req: AuthRequest, res: Response) => {
  const taskId = req.params.taskId as string;
  const { status } = req.body;

  if (!status) {
    throw new AppError(
      "Status required",
      400
    );
  }

  const mappedStatus = mapTaskStatusToPrisma(status);

  if (!mappedStatus) {
    throw new AppError("Invalid status", 400);
  }

  const task = await updateTaskStatusService(
    taskId,
    mappedStatus,
    req.user?.id as string
  );

  res.json({
    success: true,
    data: task,
  });
});

export const updateTaskProgress = asyncHandler(async (
  req: AuthRequest,
  res: Response
) => {

  const taskId = req.params.taskId as string;

  const { progress } = req.body;

  const task = await updateTaskProgressService(
    taskId,
    progress,
    req.user?.id as string
  );

  res.status(200).json({
    success: true,
    data: task,
  });

});

export const assignTask = asyncHandler(async (
  req: AuthRequest,
  res: Response
) => {

  const taskId = req.params.taskId as string;

  const { assignee_id } = req.body;

  const task =
    await assignTaskService(
      taskId,
      assignee_id,
      req.user?.id as string
    );

  res.status(200).json({
    success: true,
    data: task,
  });

});