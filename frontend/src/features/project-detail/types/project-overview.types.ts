import type {
  TaskStatus,
} from "@/features/tasks/types/task.types";

export interface ProjectStatisticsData {
  progress: number;

  totalTasks: number;
  completedTasks: number;
  inProgressTasks: number;
  reviewTasks: number;
  todoTasks: number;
  overdueTasks: number;

  aiHealthScore: number;
}

export interface SprintProgress {
  total: number;

  completed: number;

  active: number;

  todo: number;

  overdue: number;

  completionRate: number;

  health:
    | "excellent"
    | "good"
    | "warning"
    | "critical";
}

export interface WorkloadMember {
  id: string;

  name: string;

  assignedTasks: number;

  workload: number;
}

export type ActivityItem = {
  id: string;
  type: string;
  created_at: string;

  user?: {
    id: string;
    full_name?: string;
    username?: string;
    avatar?: string;
  } | null;

  task?: {
    id: string;
    title: string;
  } | null;

  payload?: any;
};

export interface AIInsight {
  score: number;

  prediction?: string | null;

  recommendation?: string | null;

  overdueRisk?: number | null;
}

export interface OverviewTask {
  id: string;

  title: string;

  status: TaskStatus;

  progress: number;

  deadline?: string | Date | null;

  assignee?: {
    id: string;

    name: string;

    avatar?: string | null;
  };
}

export interface ProjectOverview {
  statistics: ProjectStatisticsData;

  sprintProgress: SprintProgress;

  workload: WorkloadMember[];

  activities: ActivityItem[];

  recentTasks: OverviewTask[];

  ai: AIInsight;
}