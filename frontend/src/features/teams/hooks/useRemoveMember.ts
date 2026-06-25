import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { removeMember } from "../api/teamApi";

export const useRemoveMember = (teamId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userId: string) => removeMember(teamId, userId),

    onSuccess: () => {
      toast.success("Member removed successfully");

      queryClient.invalidateQueries({
        queryKey: ["team", teamId],
      });
    },

    onError: (err: any) => {
      const message =
        err?.response?.data?.message ||
        "Failed to remove member";

      const status = err?.response?.status;

      if (status === 403) {
        toast.error("You are not allowed to remove this member");
        return;
      }

      toast.error(message);
    },
  });
};