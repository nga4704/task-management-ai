import { Request, Response } from "express";
import { subtaskService } from "./subtask.service";

const toStringParam = (value: string | string[] | undefined): string => {
  if (Array.isArray(value)) return value[0];
  return value ?? "";
};

export const subtaskController = {
  async create(req: Request, res: Response) {
    const taskId = toStringParam(req.params.taskId);
    const { title } = req.body;

    const result = await subtaskService.create(taskId, title);
    res.json(result);
  },

  async toggle(req: Request, res: Response) {
    const id = toStringParam(req.params.id);

    const result = await subtaskService.toggle(id);
    res.json(result);
  },

  async remove(req: Request, res: Response) {
    const id = toStringParam(req.params.id);

    const result = await subtaskService.remove(id);
    res.json(result);
  },

  async getByTask(req: Request, res: Response) {
    const taskId = toStringParam(req.params.taskId);

    const result = await subtaskService.findByTask(taskId);
    res.json(result);
  },
};