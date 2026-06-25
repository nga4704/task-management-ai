// src/features/tasks/hooks/useDeleteTask.ts

import { useMutation } from "@tanstack/react-query";
import { taskApi } from "../api/taskApi";
import { queryClient } from "@/lib/queryClient";

export function useDeleteTask(projectId?: string) {
  return useMutation({
    mutationFn: (taskId: string) =>
      taskApi.deleteTask(taskId),

    onSuccess: (_, taskId) => {
      queryClient.invalidateQueries({
        queryKey: ["tasks", projectId],
        exact: false,
      });

      queryClient.invalidateQueries({
        queryKey: ["task-detail", taskId],
      });

      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },
  });
}