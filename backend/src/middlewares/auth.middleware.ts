import {
  Request,
  Response,
  NextFunction,
} from "express";

import { supabase }
  from "../config/supabase";

export interface AuthRequest
  extends Request {
  user?: {
    id: string;
    email?: string;
  };
}

export const protect = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {

  try {

    const authHeader =
      req.headers.authorization;

    // console.log(
    //   "AUTH HEADER:",
    //   authHeader
    // );

    if (!authHeader) {

      return res.status(401).json({
        message: "No token provided",
      });
    }

    const token =
      authHeader.replace(
        "Bearer ",
        ""
      );

    const {
      data: { user },
      error,
    } =
      await supabase.auth.getUser(
        token
      );

    if (error || !user) {

      return res.status(401).json({
        message: "Invalid token",
      });
    }

    req.user = {
      id: user.id,
      email: user.email,
    };

    next();

  } catch {

    return res.status(401).json({
      message: "Unauthorized",
    });
  }
};