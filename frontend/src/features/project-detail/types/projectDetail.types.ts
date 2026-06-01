export type ProjectStatus =
  | "Planning"
  | "In Progress"
  | "Completed"
  | "On Hold";

export interface ProjectDetail {
  id: string;

  name: string;

  description: string;

  status: ProjectStatus;

  progress: number;

  members: number;

  tasks: number;

  completedTasks: number;

  startDate: string;

  endDate: string;
}