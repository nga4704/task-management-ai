import { useMutation, useQueryClient } from "@tanstack/react-query";
import { taskApi } from "../api/taskApi";
import type { TaskStatus } from "../types/task.types";
import { tasksQueryKey } from "../utils/tasksQueryKey";

type MovePayload = {
  taskId: string;
  status: TaskStatus;
};

export function useMoveTask(params: {
  scope: "my" | "project";
  projectId?: string;
  teamId?: string;
  filters?: any;
}) {
  const queryClient = useQueryClient();

  const baseKey = tasksQueryKey(params);

  return useMutation({
    mutationFn: ({ taskId, status }: MovePayload) =>
      taskApi.moveTask(taskId, status),

    onMutate: async ({ taskId, status }) => {
      await queryClient.cancelQueries({ queryKey: baseKey });

      const previous = queryClient.getQueryData(baseKey);

      queryClient.setQueryData(baseKey, (old: any = []) =>
        old.map((t: any) =>
          t.id === taskId ? { ...t, status } : t
        )
      );

      return { previous };
    },

    onError: (_err, _vars, ctx) => {
      if (ctx?.previous) {
        queryClient.setQueryData(baseKey, ctx.previous);
      }
    },

    onSettled: () => {
      // chỉ invalidate đúng scope này thôi
      queryClient.invalidateQueries({ queryKey: baseKey });
    },
  });
}