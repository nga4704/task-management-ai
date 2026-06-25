import { useMutation } from "@tanstack/react-query";
import { taskApi } from "../api/taskApi";
import { queryClient } from "@/lib/queryClient";

export function useAssignTask(projectId?: string) {
  return useMutation({
    mutationFn: ({
      taskId,
      assigneeId,
    }: {
      taskId: string;
      assigneeId: string;
    }) =>
      taskApi.assignTask(taskId, assigneeId),

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