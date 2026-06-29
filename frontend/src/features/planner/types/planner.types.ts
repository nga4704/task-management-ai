// =======================================
// AI Planner Types
// =======================================

export type TaskPriority = "high" | "medium" | "low";
export type RiskLevel = "low" | "medium" | "high";

// =======================================
// Planner Form
// =======================================

export interface PlannerFormValues {
  goal: string;
  deadline: string;
  workload: string;
  startDate: string;
}

// =======================================
// Planner Task
// =======================================

export interface PlannerTask {
  id: string;

  title: string;

  priority: TaskPriority;

  durationHours: number;

  aiNote?: string;

  dependsOn: string[];

  risk: RiskLevel;

  // Generated schedule
  startDate: string;
  endDate: string;

  startDateLabel: string;
  endDateLabel: string;

  allocatedHours: number;
}

// Backward compatibility
export type GeneratedTask = PlannerTask;

// =======================================
// Planner Summary
// =======================================

export interface PlannerSummary {
  riskLevel: RiskLevel;

  recommendation: string;

  estimatedDays: number;

  productivityScore: number;

  confidence?: number;

  issues?: string[];

  breakdown: {
    deadlineFit: number;
    workloadFit: number;
    complexity: number;
  };
}

// =======================================
// Planner Response
// =======================================

export interface PlannerResponse {
  tasks: PlannerTask[];

  summary: PlannerSummary;

  reasoning: string[];
}