import { useQuery } from "@tanstack/react-query";
import { taskApi } from "../api/taskApi";
import type { Task } from "../types/task.types";

export const useTaskDetail = (taskId?: string) => {
  return useQuery<Task, Error>({
    queryKey: ["task-detail", taskId],
    queryFn: async () => {
      return taskApi.getTaskById(taskId!);
    },
    enabled: !!taskId,
  });
};