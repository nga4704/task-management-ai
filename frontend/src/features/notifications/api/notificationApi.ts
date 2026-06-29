import api from "@/lib/api";
import type { Notification } from "../types/notification.types";

export const notificationApi = {
  getAll: async (): Promise<Notification[]> => {
    const res = await api.get("/notifications");
    return res.data;
  },

  markAsRead: async (notificationId: string) => {
    const res = await api.patch(`/notifications/${notificationId}/read`);
    return res.data;
  },
};