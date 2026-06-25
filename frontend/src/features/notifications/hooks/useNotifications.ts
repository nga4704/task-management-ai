import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { useAuthStore } from "@/store/authStore";

import type { Notification } from "../types/notification.types";

export const useNotifications = () => {
  const user = useAuthStore((state) => state.user);

  return useQuery<Notification[]>({
    queryKey: ["notifications", user?.id],

    enabled: !!user?.id,

    queryFn: async () => {
      if (!user?.id) return [];

      const { data, error } = await supabase
        .from("notifications")
        .select("*")
        .eq("receiver_id", user.id)
        .order("created_at", { ascending: false });

      if (error) throw error;

      return data ?? [];
    },

    staleTime: 1000 * 60, // cache 1 phút
  });
};