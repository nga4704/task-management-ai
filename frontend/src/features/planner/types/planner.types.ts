export type TaskPriority =
  | "high"
  | "medium"
  | "low";

export interface GeneratedTask {
  id: string;
  title: string;
  priority: "high" | "medium" | "low";
  duration: string;
  aiNote: string;

  dependsOn?: string[];
  risk?: "low" | "medium" | "high";

  startDay: number;
  endDay: number;
  allocatedHours: number;
}

export interface PlannerFormValues {
  goal: string;

  deadline: string;

  workload: string;
}



