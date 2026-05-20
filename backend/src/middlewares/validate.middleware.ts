import {
  Request,
  Response,
  NextFunction,
} from "express";

import { ZodSchema } from "zod";

export const validate =
  (schema: ZodSchema) =>
  (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {

    try {

      // validate request body
      schema.parse(req.body);

      // continue
      next();

    } catch (error: any) {

      return res.status(400).json({
        message: error.errors,
      });
    }
  };