export type ProjectStatus =
  | "PLANNING"
  | "IN_PROGRESS"
  | "ON_HOLD"
  | "COMPLETED";

export interface Project {
  id: string;

  name: string;

  description: string;

  status: ProjectStatus;

  progress: number;

  taskCount: number;

  memberCount: number;

  aiScore: number;

  startDate?: string;

  endDate?: string;

  createdAt?: string;

   team_id: string;

}