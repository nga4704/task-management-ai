// src/shared/types/task.types.ts

export type TaskPriority =
  | "High"
  | "Medium"
  | "Low";

export type TaskStatus =
  | "todo"
  | "inProgress"
  | "review"
  | "done";

export interface Task {
  id: string;

  title: string;

  status: TaskStatus;

  priority: TaskPriority;

  progress: number;

  dueDate: string;

  aiSuggested?: boolean;

  assignees?: string[];
}

export type TaskColumns = {
  [key in TaskStatus]: Task[];
};