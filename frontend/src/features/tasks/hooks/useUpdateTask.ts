import { useMutation } from "@tanstack/react-query";
import { taskApi } from "../api/taskApi";
import { queryClient } from "@/lib/queryClient";

export function useUpdateTask(projectId?: string) {
  return useMutation({
    mutationFn: ({
      taskId,
      payload,
    }: {
      taskId: string;
      payload: any;
    }) => taskApi.updateTask(taskId, payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tasks", projectId],
      });
    },
  });
}