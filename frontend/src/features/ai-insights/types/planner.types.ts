export type TaskPriority =
  | "High"
  | "Medium"
  | "Low";

export interface GeneratedTask {
  id: string;

  title: string;

  duration: string;

  priority: TaskPriority;

  aiNote: string;
}

export interface PlannerFormValues {
  goal: string;

  deadline: string;

  workload: string;
}