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

  users_tasks_assignee_idTousers?: {
    id: string;
    full_name?: string;
    avatar?: string;
  };

  task_progress?: {
    id: string;

    progress?: number;

    note?: string;

    created_at?: string;

    users?: {
      full_name?: string;
    };
  }[];

  teams?: {
    id: string;
    name: string;
    owner_id: string;
  };

  users_tasks_created_byTousers?: {
    id: string;
    full_name?: string;
    avatar?: string;
  };

  created_by?: string;

  subtasks?: {
    id: string;
    title: string;
    completed: boolean;
    created_at?: string;
  }[];

  isOwner?: boolean;
}

