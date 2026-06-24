import { useMutation, useQueryClient } from "@tanstack/react-query";
import { taskApi } from "../api/taskApi";
import type { TaskStatus } from "../types/task.types";

type MovePayload = {
  taskId: string;
  status: TaskStatus;
};

export function useMoveTask(projectId?: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ taskId, status }: MovePayload) =>
      taskApi.moveTask(taskId, status),

    onMutate: async ({ taskId, status }) => {
      await queryClient.cancelQueries({
  queryKey: ["tasks"],
});

      const previousTasks =
  queryClient.getQueryData([
    "tasks",
    projectId,
  ]);

      queryClient.setQueryData(
         ["tasks", projectId],
        (old: any = []) => {
          return old.map((task: any) =>
            task.id === taskId
              ? { ...task, status }
              : task
          );
        }
      );

      return { previousTasks };
    },

    onError: (_err, _vars, context) => {
      queryClient.setQueryData(
        [
          "tasks",
          projectId,
        ],
        context?.previousTasks
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({
  queryKey: ["tasks"],
});
    },
  });
}