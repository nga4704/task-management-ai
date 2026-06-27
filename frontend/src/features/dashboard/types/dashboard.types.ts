import type { LucideIcon } from "lucide-react";

import type { Task } from "@/features/tasks/types/task.types";

export interface StatItem {
  title: string;
  value: string;
  change?: string;
  description?: string;
  icon?: LucideIcon;
  highlighted?: boolean;
  trend?: "positive" | "negative" | "neutral";
}

export interface DashboardOverview {
  totalProjects: number;
  totalTasks: number;
  completedTasks: number;
  overdueTasks: number;
  inProgressTasks: number;
}

export interface SprintProgress {
  totalTasks: number;
  completedTasks: number;
  overallProgress: number;
}

export interface DashboardActivity {
  id: string;

  type: string;

  actor_id: string;

  task_id?: string;

  created_at: string;

  payload?: {
    title?: string;
    progress?: number;
    assigneeId?: string;
    from?: string;
    to?: string;
  };

  project?: {
    name: string;
  };
}

export interface DashboardInsight {
  productivityScore: number;

  recommendation: string;

  risk: string;

  focusWindow: string;

  sprintSuccess: number;
}

export interface DashboardResponse {
  overview: DashboardOverview;

  sprintProgress: SprintProgress;

  tasks: Task[];

  activities: DashboardActivity[];

  insights: DashboardInsight;
}