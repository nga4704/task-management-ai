import { useQuery } from "@tanstack/react-query";
import { taskApi } from "../api/taskApi";

import type { Task, TaskPriority, TaskStatus } from "../types/task.types";

export function useTasks(
  projectId?: string,
  filters?: {
    status?: TaskStatus;
    priority?: TaskPriority;
  }
) {
  const mapStatus = (status?: string): TaskStatus | undefined => {
    if (!status || status === "all" || status === "overdue") return undefined;

    return status as TaskStatus;
  };

  const mapPriority = (priority?: string): TaskPriority | undefined => {
    if (!priority || priority === "all") return undefined;

    return priority as TaskPriority;
  };

  return useQuery<Task[]>({
    queryKey: ["tasks", projectId, filters],

    queryFn: async () => {
      const response = await taskApi.getTasks({
        project_id: projectId,
        status: mapStatus(filters?.status),
        priority: mapPriority(filters?.priority),
      });

      return response.data.map((task: any) => ({
        ...task,

        assignee: task.users_tasks_assignee_idTousers
          ? {
            id: task.users_tasks_assignee_idTousers.id,
            full_name: task.users_tasks_assignee_idTousers.full_name,
            avatar: task.users_tasks_assignee_idTousers.avatar,
          }
          : undefined,
      }));
    },
  });
}

