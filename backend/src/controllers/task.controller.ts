import { Request, Response } from "express";
import { AuthRequest } from "../middlewares/auth.middleware";

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

export const createTask = async (
  req: AuthRequest,
  res: Response
) => {

  try {

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
      createdBy: req.userId!,
    });

    res.status(201).json({
      message: "Create task successfully",
      task,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

export const getTasks = async (
  req: Request,
  res: Response
) => {

  try {

    const { teamId, status, priority } = req.query;

    const tasks = await getTasksService({
      teamId: teamId as string,
      status: status as string,
      priority: priority as string,
    });

    res.json(tasks);

  } catch (error) {

    res.status(500).json({
      message: "Server error",
    });
  }
};

export const getTaskDetail = async (
  req: Request,
  res: Response
) => {

  try {

    const taskId = req.params.taskId as string;

    const task = await getTaskDetailService(taskId);

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.json(task);

  } catch (error) {

    res.status(500).json({
      message: "Server error",
    });
  }
};

export const updateTask = async (
  req: Request,
  res: Response
) => {

  try {

    const taskId = req.params.taskId as string;

    const task = await updateTaskService(
      taskId,
      req.body
    );

    res.json({
      message: "Update task successfully",
      task,
    });

  } catch (error) {

    res.status(500).json({
      message: "Server error",
    });
  }
};

export const deleteTask = async (
  req: Request,
  res: Response
) => {

  try {

   const taskId = req.params.taskId as string;

    await deleteTaskService(taskId);

    res.json({
      message: "Delete task successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: "Server error",
    });
  }
};

export const updateTaskStatus = async (
  req: Request,
  res: Response
) => {

  try {

   const taskId = req.params.taskId as string;

    const { status } = req.body;

    const task = await updateTaskStatusService(
      taskId,
      status
    );

    res.json({
      message: "Update status successfully",
      task,
    });

  } catch (error) {

    res.status(500).json({
      message: "Server error",
    });
  }
};

export const updateTaskProgress = async (
  req: AuthRequest,
  res: Response
) => {

  try {

    const taskId = req.params.taskId as string;

    const { progress } = req.body;

    const task = await updateTaskProgressService(
      taskId,
      progress,
      req.userId as string
    );

    res.json({
      message: "Update progress successfully",
      task,
    });

  } catch (error) {

    res.status(500).json({
      message: "Server error",
    });
  }
};

export const assignTask = async (
  req: Request,
  res: Response
) => {

  try {

    const taskId = req.params.taskId as string;

    const { assigneeId } = req.body;

    const task = await assignTaskService(
      taskId,
      assigneeId
    );

    res.json({
      message: "Assign task successfully",
      task,
    });

  } catch (error) {

    res.status(500).json({
      message: "Server error",
    });
  }
};