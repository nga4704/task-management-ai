// @/features/tasks/hooks/useTasks.ts
import { useQuery } from "@tanstack/react-query";
import { taskApi } from "../api/taskApi";

import type { Task, TaskPriority, TaskStatus } from "../types/task.types";

export function useTasks(
  params: {
    projectId?: string;
    teamId?: string;
    filters?: {
      status?: TaskStatus;
      priority?: TaskPriority;
    };
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
    queryKey: ["tasks", params.projectId, params.teamId, params.filters],

    queryFn: async () => {
      const response = await taskApi.getTasks({
        project_id: params.projectId,
        team_id: params.teamId,
        status: mapStatus(params.filters?.status),
        priority: mapPriority(params.filters?.priority),
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

