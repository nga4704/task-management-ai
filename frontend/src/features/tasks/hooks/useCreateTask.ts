import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

import { taskApi }
  from "../api/taskApi";

import type { CreateTaskPayload } from "../api/taskApi";

export function useCreateTask(
  projectId: string
) {

  const queryClient =
    useQueryClient();

  return useMutation({

    mutationFn: (payload: CreateTaskPayload) =>
      taskApi.createTask(payload),

    onSuccess: () => {

      queryClient.invalidateQueries({
        queryKey: ["tasks"],
        exact: false,
      });

      queryClient.invalidateQueries({
        queryKey: [
          "tasks",
          projectId,
        ],
      });

      queryClient.invalidateQueries({
        queryKey: ["project-detail", projectId],
      });

    },

  });

}