import { useEffect } from "react";
import socket from "@/lib/socket";
import { useQueryClient } from "@tanstack/react-query";
import { useAuthStore } from "@/store/authStore";

export const useNotificationSocket = () => {
  const queryClient = useQueryClient();
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    if (!user?.id) return;

    const handleNewNotification = (notification: any) => {
      queryClient.setQueryData(
        ["notifications", user.id],
        (old: any = []) => [notification, ...old]
      );
    };

    socket.on("notification:new", handleNewNotification);

    return () => {
      socket.off("notification:new", handleNewNotification);
    };
  }, [user?.id]);
};