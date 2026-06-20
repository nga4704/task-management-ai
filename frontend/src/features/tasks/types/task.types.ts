export type TaskStatus =
  | "todo"
  | "in-progress"
  | "review"
  | "done";

export type TaskPriority = "low" | "medium" | "high";

export interface Task {
  id: string;

  team_id: string;
  project_id: string;

  title: string;
  description?: string;

  assignee_id?: string;

  priority: TaskPriority;

  status: TaskStatus;

  deadline?: string;

  estimated_hours?: number;

  position?: number;

  created_at?: string;
  updated_at?: string;
}