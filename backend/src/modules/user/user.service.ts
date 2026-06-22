import prisma from "../../config/prisma";
import {
  AppError,
} from "../../middlewares/error.middleware";

export const updateProfileService =
  async (
    userId: string,
    fullName: string,
    username: string
  ) => {

    const existingUser =
      await prisma.users.findFirst({
        where: {
          username,
          NOT: {
            id: userId,
          },
        },
      });

    if (existingUser) {
      throw new AppError(
        "Username already exists",
        400
      );
    }

    return prisma.users.update({
      where: {
        id: userId,
      },

      data: {
        full_name: fullName,
        username,
      },
    });
  };