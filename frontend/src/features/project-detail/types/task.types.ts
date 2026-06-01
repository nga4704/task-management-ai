export type TaskStatus =
  | "todo"
  | "in-progress"
  | "review"
  | "done";

export type TaskPriority =
  | "low"
  | "medium"
  | "high";

export interface Task {
  id: string;

  title: string;

  description: string;

  status: TaskStatus;

  priority: TaskPriority;

  progress: number;

  deadline: string;

  assignee: string;

  riskLevel: number;
}