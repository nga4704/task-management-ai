import { Request, Response } from "express";
import {
  registerUser,
  loginUser,
  refreshAccessToken,
  logoutUser,
} from "../services/auth.service";
import {
  AuthRequest,
} from "../middlewares/auth.middleware";

// REGISTER
export const register = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      username,
      email,
      password,
      fullName,
    } = req.body;

    const user = await registerUser(
      username,
      email,
      password,
      fullName
    );

    res.status(201).json({
      message: "Register successfully",
      user,
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// LOGIN
export const login = async (
  req: Request,
  res: Response
) => {
  try {
    const { email, password } = req.body;

    const data = await loginUser(
      email,
      password
    );

    res.status(200).json(data);
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// REFRESH TOKEN
export const refresh = async (
  req: Request,
  res: Response
) => {

  try {

    const {
      refreshToken,
    } = req.body;

    const data =
      await refreshAccessToken(
        refreshToken
      );

    res.status(200).json(data);

  } catch (error: any) {

    res.status(401).json({
      message: error.message,
    });

  }
};

// LOGOUT
export const logout = async (
  req: AuthRequest,
  res: Response
) => {

  try {

    const data =
      await logoutUser(
        req.userId!
      );

    res.status(200).json(data);

  } catch (error: any) {

    res.status(500).json({
      message: error.message,
    });

  }
};