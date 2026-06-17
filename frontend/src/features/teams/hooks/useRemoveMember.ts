import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import {
  removeMember,
} from "../api/teamApi";

export const useRemoveMember =
  (teamId: string) => {

    const queryClient =
      useQueryClient();

    return useMutation({

      mutationFn:
        (userId: string) =>
          removeMember(
            teamId,
            userId
          ),

      onSuccess: () => {

        queryClient.invalidateQueries({
          queryKey: [
            "team",
            teamId,
          ],
        });
      },
    });
  };