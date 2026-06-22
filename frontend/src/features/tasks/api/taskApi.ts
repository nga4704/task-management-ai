import apiClient from "@/lib/api";

import type {
  TaskStatus,
  TaskPriority,
} from "../types/task.types";

export interface CreateTaskPayload {
  team_id: string;
  project_id: string;

  title: string;
  description?: string;

  assignee_id?: string;

  priority: TaskPriority;

  deadline?: string;
  estimated_hours?: number;
}

export interface UpdateTaskPayload {
  title?: string;
  description?: string;

  status?: TaskStatus;
  priority?: TaskPriority;

  assignee_id?: string;

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

  page?: number;
  limit?: number;
}

export const taskApi = {
  /**
   * GET TASKS (FILTER + GLOBAL)
   * dùng cho: kanban, dashboard, project detail
   */
  getTasks: (params?: GetTasksParams) =>
    apiClient.get("/tasks", { params }),

  /**
   * GET TASK DETAIL
   */
  getTaskById: (taskId: string) =>
    apiClient.get(`/tasks/${taskId}`),

  /**
   * CREATE TASK
   */
  createTask: (payload: CreateTaskPayload) =>
    apiClient.post("/tasks", payload),

  /**
   * UPDATE TASK (FULL UPDATE)
   */
  updateTask: (taskId: string, payload: UpdateTaskPayload) =>
    apiClient.put(`/tasks/${taskId}`, payload),

  /**
   * PATCH MOVE TASK (KANBAN DRAG & DROP)
   */
  moveTask: (taskId: string, status: TaskStatus) =>
    apiClient.patch(`/tasks/${taskId}/move`, {
      status,
    }),

  /**
   * DELETE TASK
   */
  deleteTask: (taskId: string) =>
    apiClient.delete(`/tasks/${taskId}`),

  /**
   * ASSIGN TASK (OPTIONAL FEATURE - PRO TEAM WORKFLOW)
   */
  assignTask: (taskId: string, assignee_id: string) =>
    apiClient.patch(`/tasks/${taskId}/assign`, {
      assignee_id,
    }),
};