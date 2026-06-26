import { useQuery } from "@tanstack/react-query";

import { taskApi } from "../api/taskApi";

import type {
  Task,
  TaskPriority,
  TaskStatus,
} from "../types/task.types";

type UseTasksParams = {
  scope: "my" | "project";

  projectId?: string;
  teamId?: string;

  userId?: string;

  filters?: {
    status?: TaskStatus;
    priority?: TaskPriority;

    search?: string;

    assignee?: string;

    aiRisk?: boolean;
  };
};

export function useTasks(
  params: UseTasksParams
) {
  return useQuery<Task[]>({
    queryKey: [
      "tasks",

      params.scope,

      params.projectId,

      params.teamId,

      params.filters?.status,

      params.filters?.priority,

      params.filters?.search,

      params.filters?.assignee,

      params.filters?.aiRisk,
    ],

    queryFn: async () => {
      const response =
        await taskApi.getTasks({
          project_id:
            params.scope === "project"
              ? params.projectId
              : undefined,

          team_id: params.teamId,

          assignee_id:
            params.filters?.assignee &&
            params.filters.assignee !==
              "all"
              ? params.filters.assignee
              : undefined,

          status:
            params.filters?.status,

          priority:
            params.filters?.priority,

          search:
            params.filters?.search ||
            undefined,

          aiRisk:
            params.filters?.aiRisk,
        });

      return response.data.map(
        (task: any) => ({
          ...task,

          assignee:
            task.users_tasks_assignee_idTousers
              ? {
                  id:
                    task
                      .users_tasks_assignee_idTousers
                      .id,

                  full_name:
                    task
                      .users_tasks_assignee_idTousers
                      .full_name,

                  avatar:
                    task
                      .users_tasks_assignee_idTousers
                      .avatar,
                }
              : undefined,
        })
      );
    },
  });
}