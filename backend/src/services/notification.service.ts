import prisma from "../config/prisma";

export const getNotificationsService = async (
  userId: string
) => {

  return prisma.notifications.findMany({
    where: {
      receiver_id: userId,
    },

    orderBy: {
      created_at: "desc",
    },
  });
};

export const markAsReadService = async (
  notificationId: string
) => {

  return prisma.notifications.update({
    where: {
      id: notificationId,
    },

    data: {
      is_read: true,
    },
  });
};