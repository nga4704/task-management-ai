import bcrypt from "bcryptjs";
import prisma from "../config/prisma";
import jwt from "jsonwebtoken";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/jwt";

export const registerUser = async (
  username: string,
  email: string,
  password: string,
  fullName: string
) => {
  const existingUser = await prisma.users.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    throw new Error("Email already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.users.create({
    data: {
      username,
      email,
      password: hashedPassword,
      full_name: fullName,
    },
  });

  return user;
};

export const loginUser = async (
  email: string,
  password: string
) => {

  const user =
    await prisma.users.findUnique({

      where: {
        email,
      },
    });

  if (!user) {

    throw new Error(
      "User not found"
    );
  }

  // compare password
  const isMatch =
    await bcrypt.compare(
      password,
      user.password
    );

  if (!isMatch) {

    throw new Error(
      "Invalid credentials"
    );
  }

  // generate tokens
  const accessToken =
    generateAccessToken(user.id);

  const refreshToken =
    generateRefreshToken(user.id);

  // save refresh token
  await prisma.users.update({

    where: {
      id: user.id,
    },

    data: {
      refresh_token: refreshToken,
    },
  });

  return {
    accessToken,
    refreshToken,
    user,
  };
};

export const refreshAccessToken =
  async (
    refreshToken: string
  ) => {

    if (!refreshToken) {

      throw new Error(
        "No refresh token"
      );
    }

    // verify refresh token
    const decoded = jwt.verify(

      refreshToken,

      process.env
        .JWT_REFRESH_SECRET as string

    ) as {
      userId: string;
    };

    // find user
    const user =
      await prisma.users.findUnique({

        where: {
          id: decoded.userId,
        },
      });

    if (!user) {

      throw new Error(
        "User not found"
      );
    }

    // check token match DB
    if (
      user.refresh_token !==
      refreshToken
    ) {

      throw new Error(
        "Invalid refresh token"
      );
    }

    // create new access token
    const newAccessToken =
      generateAccessToken(user.id);

    return {
      accessToken: newAccessToken,
    };
};

// LOGOUT
export const logoutUser = async (
  userId: string
) => {

  // remove refresh token
  await prisma.users.update({

    where: {
      id: userId,
    },

    data: {
      refresh_token: null,
    },
  });

  return {
    message: "Logout successfully",
  };
};