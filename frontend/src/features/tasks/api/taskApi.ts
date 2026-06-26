import apiClient from "@/lib/api";

import type {
  Task,
  TaskPriority,
  TaskStatus,
} from "../types/task.types";

export interface CreateTaskPayload {
  team_id: string;

  project_id: string;

  title: string;

  description?: string;

  assignee_id?: string;

  priority: TaskPriority;

  start_date?: string;

  deadline?: string;

  estimated_hours?: number;
}

export interface UpdateTaskPayload {
  title?: string;

  description?: string;

  status?: TaskStatus;

  priority?: TaskPriority;

  assignee_id?: string;

   start_date?: string;

  deadline?: string;

  estimated_hours?: number;
}

export interface GetTasksParams {
  team_id?: string;

  project_id?: string;

  assignee_id?: string;

  status?: TaskStatus;

  priority?: TaskPriority;

  search?: string;

  aiRisk?: boolean;

  page?: number;

  limit?: number;
}

export const taskApi = {
  /**
   * GET TASKS
   */

  getTasks: (
    params?: GetTasksParams
  ) =>
    apiClient.get("/tasks", {
      params,
    }),

  /**
   * GET DETAIL
   */

  getTaskById: async (
    taskId: string
  ): Promise<Task> => {
    const res =
      await apiClient.get(
        `/tasks/${taskId}`
      );

    return res.data.data;
  },

  /**
   * CREATE
   */

  createTask: (
    payload: CreateTaskPayload
  ) =>
    apiClient.post(
      "/tasks",
      payload
    ),

  /**
   * UPDATE
   */

  updateTask: (
    taskId: string,
    payload: UpdateTaskPayload
  ) =>
    apiClient.put(
      `/tasks/${taskId}`,
      payload
    ),

  /**
   * MOVE
   */

  moveTask: (
    taskId: string,
    status: TaskStatus
  ) =>
    apiClient.patch(
      `/tasks/${taskId}/move`,
      {
        status,
      }
    ),

  /**
   * DELETE
   */

  deleteTask: (taskId: string) =>
    apiClient.delete(
      `/tasks/${taskId}`
    ),

  /**
   * ASSIGN
   */

  assignTask: (
    taskId: string,
    assignee_id: string
  ) =>
    apiClient.patch(
      `/tasks/${taskId}/assign`,
      {
        assignee_id,
      }
    ),
};