import { Request, Response } from "express";
import { commentService } from "./comment.service";

const toStringParam = (value: string | string[] | undefined): string => {
  if (Array.isArray(value)) return value[0];
  return value ?? "";
};

export const commentController = {
  async getByTask(req: Request, res: Response) {
    const taskId = toStringParam(req.params.taskId);

    const result = await commentService.findByTask(taskId);

    res.json(result);
  },

  async create(req: Request, res: Response) {
    const taskId = toStringParam(req.params.taskId);
    const { content, userId, parentId } = req.body;

    const result = await commentService.create(taskId, userId, content, parentId);

    res.json(result);
  },

  async remove(req: Request, res: Response) {
    const id = toStringParam(req.params.id);

    // nếu bạn có auth middleware thì lấy từ req.user
    const userId = req.body.userId;

    const result = await commentService.remove(id, userId);

    res.json(result);
  },
};