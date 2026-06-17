import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import {
  updateTeam,
} from "../api/teamApi";

export const useUpdateTeam =
  (teamId: string) => {

    const queryClient =
      useQueryClient();

    return useMutation({

      mutationFn: (
        payload: {
          name: string;
          description?: string;
        }
      ) =>
        updateTeam(
          teamId,
          payload
        ),

      onSuccess: () => {

        queryClient.invalidateQueries({
          queryKey: [
            "team",
            teamId,
          ],
        });

        queryClient.invalidateQueries({
          queryKey: [
            "teams",
          ],
        });
      },
    });
  };