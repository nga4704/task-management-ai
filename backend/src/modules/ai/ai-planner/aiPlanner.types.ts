export type PlannerInput = {
  goal: string;
  deadline: string;
  workload: number; // 🔥 FIX: string → number
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
export type PlannerResponse = {
  tasks: GeneratedTask[];
  summary: PlannerSummary;
  reasoning: string[];
};