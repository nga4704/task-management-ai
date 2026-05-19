import {
  Request,
  Response,
  NextFunction,
} from "express";

import jwt from "jsonwebtoken";


// custom request type
export interface AuthRequest
  extends Request {

  userId?: string;
}


// auth middleware
export const protect = (

  req: AuthRequest,

  res: Response,

  next: NextFunction

) => {

  try {

    const token =
      req.headers.authorization;

    if (!token) {

      return res.status(401).json({
        message: "No token",
      });
    }

    // split Bearer TOKEN
    const splitToken =
      token.split(" ")[1];

    // verify jwt
    const decoded = jwt.verify(

      splitToken,

      process.env.JWT_SECRET as string

    ) as {
      userId: string;
    };

    // gắn userId vào request
    req.userId = decoded.userId;

    next();

  } catch (error) {

    return res.status(401).json({
      message: "Invalid token",
    });

  }
};