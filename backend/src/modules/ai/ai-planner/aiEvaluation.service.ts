import { PlannerInput, PlannerTask } from "./aiPlanner.types";

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

export class AIEvaluationService {
  evaluate(
    tasks: PlannerTask[],
    input: PlannerInput
  ): EvaluationResult {
    const issues: string[] = [];

    if (!tasks.length) {
      return {
        deadlineFit: 0,
        workloadFit: 0,
        dependencyFit: 0,
        feasibility: 0,
        coverage: 0,
        productivityScore: 0,
        confidence: 0,
        issues: ["No tasks generated"],
        recommendation: "AI failed to generate tasks",
      };
    }

    // ======================
    // 1. DEADLINE FIT (REAL)
    // ======================
    let deadlineFit = 1;

    const deadline = input.deadline
      ? new Date(input.deadline)
      : null;

    const lastTaskEnd = tasks.reduce((max, t) => {
      if (!t.endDate) return max;
      return t.endDate > max ? t.endDate : max;
    }, tasks[0].endDate!);

    if (deadline && lastTaskEnd > deadline) {
      deadlineFit = 0;
      issues.push("Project exceeds deadline");
    }

    // ======================
    // 2. WORKLOAD FIT
    // ======================
    let workloadFit = 1;
    const capacity = input.workload;

    const dailyMap = new Map<string, number>();

    for (const t of tasks) {
      const day = t.startDateLabel || "";
      dailyMap.set(day, (dailyMap.get(day) || 0) + (t.allocatedHours || 0));
    }

    for (const hours of dailyMap.values()) {
      if (hours > capacity) {
        workloadFit = 0;
        issues.push(`Overloaded day detected (> ${capacity}h)`);
        break;
      }
    }

    // ======================
    // 3. DEPENDENCY FIT
    // ======================
    let dependencyFit = 1;

    const ids = new Set(tasks.map(t => t.id));

    for (const t of tasks) {
      for (const dep of t.dependsOn || []) {
        if (!ids.has(dep)) {
          dependencyFit = 0;
          issues.push(`Missing dependency: ${dep}`);
        }
      }
    }

    // ======================
    // 4. COVERAGE (IMPORTANT)
    // ======================
    const expected = 8;
    const coverage = Math.min(tasks.length / expected, 1);

    if (coverage < 0.5) {
      issues.push("Low task decomposition coverage");
    }

    // ======================
    // 5. FEASIBILITY
    // ======================
    const feasibility =
      (deadlineFit + workloadFit + dependencyFit) / 3;

    // ======================
    // 6. PRODUCTIVITY SCORE (REALISTIC)
    // ======================
    const productivityScore = Math.round(
      deadlineFit * 30 +
      workloadFit * 25 +
      dependencyFit * 20 +
      feasibility * 15 +
      coverage * 10
    );

    // ======================
    // 7. CONFIDENCE (NOT FAKE 100%)
    // ======================
    const confidence = Math.round(
      productivityScore * 0.9 + coverage * 10
    );

    // ======================
    // 8. RECOMMENDATION
    // ======================
    let recommendation =
      "Schedule looks feasible.";

    if (productivityScore < 85) {
      recommendation =
        "Minor risks detected in workload or dependencies.";
    }

    if (productivityScore < 70) {
      recommendation =
        "Consider reducing scope or extending deadline.";
    }

    if (productivityScore < 50) {
      recommendation =
        "Schedule is not recommended without major changes.";
    }

    return {
      deadlineFit,
      workloadFit,
      dependencyFit,
      feasibility,
      coverage,
      productivityScore,
      confidence,
      issues,
      recommendation,
    };
  }
}