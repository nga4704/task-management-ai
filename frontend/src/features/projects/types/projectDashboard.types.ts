export interface ProjectDashboard {
  totalProjects: number;
  activeProjects: number;
  completedProjects: number;
  totalMembers: number;
  productivity: number;
}

export interface ProjectActivity {
  id: string;
  user: string;
  action: string;
  createdAt: string;
}