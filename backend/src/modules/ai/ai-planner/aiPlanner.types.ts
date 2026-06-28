export type PlannerInput = {
  goal: string;
  deadline: string;
  workload: number; // 🔥 FIX: string → number
  startDate?: string | Date;
};

// ==============================
// 🧠 TASK TYPE (SAAS LEVEL)
// ==============================
export interface GeneratedTask {
  id: string;
  title: string;

  priority: "high" | "medium" | "low";

  durationHours: number;

  aiNote: string;

  dependsOn: string[];

  risk: "low" | "medium" | "high";

  startDay: number;
  endDay: number;

  allocatedHours: number; // 🔥 NEW
}

// ==============================
// 📊 SUMMARY (SAAS LEVEL)
// ==============================
export interface PlannerSummary {
  riskLevel: "low" | "medium" | "high";

  recommendation: string;

  estimatedDays: number;

  productivityScore: number;

  breakdown: {
    deadlineFit: number;
    workloadFit: number;
    complexity: number;
  };
}

// ==============================
// 📦 RESPONSE
// ==============================
// export type PlannerResponse = {
//   tasks: GeneratedTask[];
//   summary: PlannerSummary;
//   reasoning: string[];
// };

export interface PlannerTask {
  id: string;
  title: string;
  priority: "low" | "medium" | "high";
  durationHours?: number;
  dependsOn?: string[];

  // REAL CALENDAR
  startDate?: Date;
  endDate?: Date;

  // UI DISPLAY
  startDateLabel?: string;
  endDateLabel?: string;

  allocatedHours?: number;
}

export interface PlannerResponse {
  tasks: PlannerTask[];

  summary: {
    riskLevel: string;
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