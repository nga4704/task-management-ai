import { Request, Response } from "express";
import { attachmentService } from "./attachment.service";

const toStringParam = (value: string | string[] | undefined): string => {
  if (Array.isArray(value)) return value[0];
  return value ?? "";
};

export const attachmentController = {
  async upload(req: Request, res: Response) {
    const taskId = toStringParam(req.params.taskId);

    const file = req.file as Express.Multer.File | undefined;

    if (!file) {
      return res.status(400).json({
        message: "File is required",
      });
    }

    const result = await attachmentService.upload(taskId, file);

    res.json(result);
  },

  async getByTask(req: Request, res: Response) {
    const taskId = toStringParam(req.params.taskId);

    const result = await attachmentService.findByTask(taskId);

    res.json(result);
  },

  async remove(req: Request, res: Response) {
    const id = toStringParam(req.params.id);

    const result = await attachmentService.remove(id);

    res.json(result);
  },
};