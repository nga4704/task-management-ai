import { useQuery } from "@tanstack/react-query";

import { taskApi } from "../api/taskApi";

export function useTasks(projectId?: string) {
  return useQuery({
    queryKey: ["tasks", projectId],

    queryFn: async () => {
      const data =
        await taskApi.getTasks({
          project_id: projectId,
        });

      return data.data;
    },
  });
}