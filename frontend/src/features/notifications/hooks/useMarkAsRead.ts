import { useMutation, useQueryClient } from "@tanstack/react-query";
import { notificationApi } from "../api/notificationApi";
import { useAuthStore } from "@/store/authStore";

export const useMarkAsRead = () => {
  const queryClient = useQueryClient();
  const user = useAuthStore((s) => s.user);

  return useMutation({
    mutationFn: (notificationId: string) =>
      notificationApi.markAsRead(notificationId),

    onSuccess: (_, notificationId) => {
      queryClient.setQueryData(
        ["notifications", user?.id],
        (old: any = []) =>
          old.map((n: any) =>
            n.id === notificationId
              ? { ...n, is_read: true }
              : n
          )
      );
    },
  });
};