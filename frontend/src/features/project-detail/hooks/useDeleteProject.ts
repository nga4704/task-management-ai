import { useMutation, useQueryClient } from "@tanstack/react-query";
import { projectApi } from "@/features/projects/api/projectApi";

export function useDeleteProject() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (projectId: string) =>
      projectApi.deleteProject(projectId),

    onSuccess: (_, projectId) => {

      queryClient.cancelQueries({
        queryKey: ["project-detail", projectId],
      });

      queryClient.removeQueries({
        queryKey: ["project-detail", projectId],
      });

      queryClient.removeQueries({
        queryKey: ["project", projectId],
      });

      queryClient.invalidateQueries({
        queryKey: ["team-projects"],
      });
    },
  });
}