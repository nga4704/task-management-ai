import prisma from "../../config/prisma";
import { getIO } from "../../config/socket";

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

  const notification = await prisma.notifications.update({
    where: {
      id: notificationId,
    },
    data: {
      is_read: true,
    },
  });

  const io = getIO();
  io.emit("notificationRead", notification);

  return notification;
};