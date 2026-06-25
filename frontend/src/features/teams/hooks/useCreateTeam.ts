import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { createTeam } from "../api/teamApi";
import { getApiErrorMessage } from "@/lib/apiError";

export const useCreateTeam = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTeam,

    onSuccess: () => {
      toast.success("Team created successfully");

      queryClient.invalidateQueries({
        queryKey: ["teams"],
      });
    },

    onError: (err: any) => {
      toast.error(getApiErrorMessage(err));
    },
  });
};