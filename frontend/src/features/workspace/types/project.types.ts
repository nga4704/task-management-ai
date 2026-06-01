// types/project.types.ts

export type ProjectStatus =
  | "Planning"
  | "In Progress"
  | "Review"
  | "Completed";

export interface Project {
  id: string;

  name: string;

  description: string;

  status: ProjectStatus;

  progress: number;

  tasks: number;

  members: number;

  aiScore: number;

  startDate: string;

  endDate: string;

  createdAt: string;
}