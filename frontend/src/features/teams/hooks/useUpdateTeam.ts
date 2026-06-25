import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { updateTeam } from "../api/teamApi";
import { getApiErrorMessage } from "@/lib/apiError";

export const useUpdateTeam = (teamId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: { name: string; description?: string }) =>
      updateTeam(teamId, payload),

    onSuccess: () => {
      toast.success("Team updated successfully");

      queryClient.invalidateQueries({
        queryKey: ["team", teamId],
      });

      queryClient.invalidateQueries({
        queryKey: ["teams"],
      });
    },

    onError: (err: any) => {
      toast.error(getApiErrorMessage(err));
    },
  });
};