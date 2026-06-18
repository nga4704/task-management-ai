import { useMutation, useQueryClient } from "@tanstack/react-query";
import { projectApi } from "../api/projectApi";

export const useCreateProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (
      {
        teamId,
        ...payload
      }: {
        teamId: string;
        name: string;
        description?: string;
        status: string;
        startDate?: string;
        endDate?: string;
      }
    ) => projectApi.createProject(teamId, payload),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["team-projects", variables.teamId],
      });
    },
  });
};