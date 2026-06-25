import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import apiClient from "@/lib/api";

export function useUpdateProgress(projectId?: string) {
  return useMutation({
    mutationFn: ({
      taskId,
      progress,
    }: {
      taskId: string;
      progress: number;
    }) =>
      apiClient.patch(
        `/tasks/${taskId}/progress`,
        {
          progress,
        }
      ),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tasks", projectId],
      });

      queryClient.invalidateQueries({
        queryKey: ["task-detail"],
      });
    },
  });
}