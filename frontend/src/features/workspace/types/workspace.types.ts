export type ProjectStatus =
  | "Planning"
  | "In Progress"
  | "Review"
  | "Completed";

export interface Project {
  id: string;

  name: string;

  description: string;

  progress: number;

  tasks: number;

  members: number;

  status: ProjectStatus;

  aiScore: number;
}

export interface WorkspaceActivity {
  id: string;

  user: string;

  action: string;

  time: string;
}