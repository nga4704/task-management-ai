import type {
  ProjectStatus,
} from "../../projects/types/project.types";

export interface ProjectDetail {
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

  tasks: any[];

  members: any[];

  teamId: string; 
}