// @/features/tasks/hooks/useTasks.ts
import { useQuery } from "@tanstack/react-query";
import { taskApi } from "../api/taskApi";

import type { Task, TaskPriority, TaskStatus } from "../types/task.types";

type UseTasksParams = {
  scope: "my" | "project";

  projectId?: string;
  teamId?: string;

  filters?: {
    status?: TaskStatus;
    priority?: TaskPriority;
  };

  userId?: string; // dùng cho "my tasks"
};

export function useTasks(params: UseTasksParams) {
  const mapStatus = (status?: string): TaskStatus | undefined => {
    if (!status || status === "all" || status === "overdue") return undefined;
    return status as TaskStatus;
  };

  const mapPriority = (priority?: string): TaskPriority | undefined => {
    if (!priority || priority === "all") return undefined;
    return priority as TaskPriority;
  };

  return useQuery<Task[]>({
    queryKey: [
      "tasks",
      params.scope,
      params.projectId,
      params.teamId,
      params.filters,
    ],

    queryFn: async () => {
      const response = await taskApi.getTasks({
        project_id: params.scope === "project" ? params.projectId : undefined,
        team_id: params.teamId,

        // backend sẽ tự xử lý nếu là "my"
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

