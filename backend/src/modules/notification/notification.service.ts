import prisma from "../../config/prisma";
import { getIO } from "../../config/socket";

type CreateNotificationInput = {
  receiverId: string;
  senderId?: string;
  type: string;
  title: string;
  message?: string;
};

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

export const createNotification = async (data: CreateNotificationInput) => {
  const notification = await prisma.notifications.create({
    data: {
      receiver_id: data.receiverId,
      sender_id: data.senderId,
      type: data.type,
      title: data.title,
      message: data.message,
    },
  });

  const io = getIO();

  io.to(`user_${data.receiverId}`).emit("notification:new", notification);

  return notification;
};