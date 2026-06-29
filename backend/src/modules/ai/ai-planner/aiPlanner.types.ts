export type PlannerInput = {
  goal: string;
  deadline: string;
  workload: number;
  startDate?: string | Date;
};

export interface PlannerTask {
  id: string;
  title: string;

  priority: "high" | "medium" | "low";
  durationHours: number;

  aiNote: string;
  dependsOn: string[];

  risk: "low" | "medium" | "high";

  startDate?: Date;
  endDate?: Date;

  startDateLabel?: string;
  endDateLabel?: string;

  allocatedHours?: number;
}

export interface PlannerResponse {
  tasks: PlannerTask[];

  summary: {
    riskLevel: "low" | "medium" | "high";
    recommendation: string;
    estimatedDays: number;
    productivityScore: number;

    breakdown: {
      deadlineFit: number;
      workloadFit: number;
      complexity: number;
    };
  };

  reasoning: string[];
}

export interface EvaluationResult {
  deadlineFit: number;
  workloadFit: number;
  dependencyFit: number;
  feasibility: number;
  coverage: number;

  productivityScore: number;
  confidence: number;

  issues: string[];
  recommendation: string;
}