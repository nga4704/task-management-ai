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

});

export const deleteTask = asyncHandler(async (
  req: Request,
  res: Response
) => {

  const taskId = req.params.taskId as string;

  await deleteTaskService(taskId);

  res.status(200).json({
    message: "Delete task successfully",
  });

});

export const updateTaskStatus = asyncHandler(async (req: Request, res: Response) => {
  const taskId = req.params.taskId as string;
  const { status } = req.body;

  if (!status) {
    throw new AppError("Status required", 400);
  }

  const task = await updateTaskStatusService(taskId, status);

  res.json({
    message: "Task moved",
    task,
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
    message: "Update progress successfully",
    task,
  });

});

export const assignTask = asyncHandler(async (
  req: Request,
  res: Response
) => {

  const taskId = req.params.taskId as string;

  const { assignee_id } = req.body;

  const task =
    await assignTaskService(
      taskId,
      assignee_id
    );

  res.status(200).json({
    message: "Assign task successfully",
    task,
  });

});