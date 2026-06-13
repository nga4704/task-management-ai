import { useMutation, useQueryClient } from "@tanstack/react-query";

import { projectApi } from "../api/projectApi.ts";

export const useCreateProject = () => {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: (
      payload: {
        name: string;
        description?: string;
        teamId: string;
        status: string;
        startDate?: string;
        endDate?: string;
      }
    ) =>
      projectApi.createProject(
        payload
      ),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["projects"],
      });
    },
  });
};