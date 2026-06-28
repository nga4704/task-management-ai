export type TaskPriority = "high" | "medium" | "low";

// ==============================
// 🧠 INPUT
// ==============================
export interface PlannerFormValues {
  goal: string;
  deadline: string;
  workload: string;
  startDate: string;
}

// ==============================
// 🧠 TASK (UNIFIED CONTRACT)
// ==============================
export interface PlannerTask {
  id: string;
  title: string;

  priority: TaskPriority;

  durationHours: number;

  aiNote?: string;

  dependsOn: string[];

  risk: "low" | "medium" | "high";

  // ======================
  // REAL SCHEDULE (BACKEND GENERATED)
  // ======================
  startDate: string; // ISO string
  endDate: string;   // ISO string

  // ======================
  // UI DISPLAY
  // ======================
  startDateLabel: string; // "28/06/2026"
  endDateLabel: string;

  allocatedHours: number;
}

// ==============================
// 📊 SUMMARY
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
export interface PlannerResponse {
  tasks: PlannerTask[];
  summary: PlannerSummary;
  reasoning: string[];
}