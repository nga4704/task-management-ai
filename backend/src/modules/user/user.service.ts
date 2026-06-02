import prisma from "../config/prisma";

export const updateProfileService = async (
  userId: string,
  fullName: string,
  username: string
) => {

  // update user in database
  const updatedUser = await prisma.users.update({
    where: {
      id: userId,
    },

    data: {
      full_name: fullName,
      username,
    },
  });

  return updatedUser;
};