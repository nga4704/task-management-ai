import { useQuery } from "@tanstack/react-query";
import { useAuthStore } from "@/store/authStore";
import { notificationApi } from "../api/notificationApi";
import type { Notification } from "../types/notification.types";

export const useNotifications = () => {
  const user = useAuthStore((state) => state.user);

  return useQuery<Notification[]>({
    queryKey: ["notifications", user?.id],

    enabled: !!user?.id,

    queryFn: async () => {
      return await notificationApi.getAll();
    },

    staleTime: 1000 * 60,
  });
};