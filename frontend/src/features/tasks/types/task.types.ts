export type TaskStatus =
  | "TODO"
  | "IN_PROGRESS"
  | "REVIEW"
  | "DONE";

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

  progress?: number;

  assignee?: {
  id: string;
  full_name?: string;
  avatar?: string;
};
}

