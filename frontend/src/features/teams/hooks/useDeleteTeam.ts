import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { deleteTeam } from "../api/teamApi";
import { getApiErrorMessage } from "@/lib/apiError";

export const useDeleteTeam = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTeam,

    onSuccess: () => {
      toast.success("Team deleted successfully");

      queryClient.invalidateQueries({
        queryKey: ["teams"],
      });
    },

    onError: (err: any) => {
      toast.error(getApiErrorMessage(err));
    },
  });
};