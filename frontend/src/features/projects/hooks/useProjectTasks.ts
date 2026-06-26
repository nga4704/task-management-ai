import { useQuery } from "@tanstack/react-query";

import { projectApi } from "../api/projectApi";

import type { Task } from "@/features/tasks/types/task.types";

export function useProjectTasks(projectId?: string) {
  return useQuery<Task[]>({
    queryKey: ["project-tasks", projectId],

    enabled: !!projectId,

    queryFn: async () => {
      try {
        const res = await projectApi.getProjectTasks(projectId!);

        // console.log("RAW TASK RESPONSE:", res);

        return Array.isArray(res) ? res : res.data ?? [];
      } catch (err) {
        // console.error("TASK API ERROR:", err);
        return [];
      }
    },
  });
}