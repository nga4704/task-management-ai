import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import {
  deleteTeam,
} from "../api/teamApi";

export const useDeleteTeam =
  () => {

    const queryClient =
      useQueryClient();

    return useMutation({

      mutationFn:
        deleteTeam,

      onSuccess: () => {

        queryClient.invalidateQueries({
          queryKey: [
            "teams",
          ],
        });
      },
    });
  };