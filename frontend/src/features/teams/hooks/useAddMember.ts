import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import {
  addMember,
} from "../api/teamApi";

export const useAddMember =
  (teamId: string) => {

    const queryClient =
      useQueryClient();

    return useMutation({

      mutationFn:
        (email: string) =>
          addMember(
            teamId,
            email
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