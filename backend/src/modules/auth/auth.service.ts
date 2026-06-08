import bcrypt from "bcryptjs";
import prisma from "../../config/prisma";
import jwt from "jsonwebtoken";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../../utils/jwt";
import { verifyGoogleToken }
  from "./google.service";
import { generateResetToken }
from "../../utils/resetToken";

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

  // User đăng nhập bằng Google
  if (!user.password) {
    throw new Error(
      "Please login with Google"
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

export const loginGoogle =
  async (
    credential: string
  ) => {

    const payload =
      await verifyGoogleToken(
        credential
      );

    if (!payload) {

      throw new Error(
        "Invalid Google token"
      );
    }

    const email =
      payload.email;

    if (!email) {

      throw new Error(
        "Email missing"
      );
    }

    let user =
      await prisma.users.findUnique({

        where: {
          email,
        },
      });

    if (!user) {

      user =
        await prisma.users.create({

          data: {

            email,

            username:
              email.split("@")[0],

            full_name:
              payload.name,

            avatar:
              payload.picture,

            google_id:
              payload.sub,

            password: "",
          },
        });
    }

    const accessToken =
      generateAccessToken(
        user.id
      );

    const refreshToken =
      generateRefreshToken(
        user.id
      );

    await prisma.users.update({

      where: {
        id: user.id,
      },

      data: {
        refresh_token:
          refreshToken,
      },
    });

    return {
      user,
      accessToken,
      refreshToken,
    };
  };

//  FORGOT PASSWORD 
export const forgotPassword =
async (email: string) => {

  const user =
    await prisma.users.findUnique({
      where: { email }
    });

  if (!user) {

    return;
  }

  const token =
    generateResetToken(
      user.id
    );

  await prisma.users.update({

    where: {
      id: user.id
    },

    data: {
      reset_token: token,
      reset_token_expiry:
        new Date(
          Date.now() + 15 * 60 * 1000
        )
    }
  });

  return token;
};

// RESET PASSWORD 
export const resetPassword =
async (
  token: string,
  password: string
) => {

  const user =
    await prisma.users.findFirst({

      where: {
        reset_token: token
      }
    });

  if (!user) {

    throw new Error(
      "Invalid token"
    );
  }

  const hashedPassword =
    await bcrypt.hash(
      password,
      10
    );

  await prisma.users.update({

    where: {
      id: user.id
    },

    data: {

      password:
        hashedPassword,

      reset_token:
        null,

      reset_token_expiry:
        null,
    }
  });

  return true;
};