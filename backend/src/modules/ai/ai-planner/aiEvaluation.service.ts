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

    const dailyLoad = new Map<string, number>();

    for (const t of tasks) {
      if (!t.startDate || !t.endDate) continue;

      let d = new Date(t.startDate);

      while (d <= t.endDate) {
        const key = d.toISOString().split("T")[0];

        const durationPerDay =
          t.durationHours /
          Math.max(
            1,
            (t.endDate.getTime() - t.startDate.getTime()) /
            (1000 * 60 * 60 * 24)
          );

        dailyLoad.set(
          key,
          (dailyLoad.get(key) || 0) + durationPerDay
        );

        d.setDate(d.getDate() + 1);
      }
    }
    for (const hours of dailyLoad.values()) {
      if (hours > capacity) {
        workloadFit = Math.max(
          0,
          1 - (hours - capacity) / capacity
        );

        issues.push(`Overloaded day: ${hours.toFixed(1)}h`);
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
    const expected = Math.max(
      6,
      Math.floor((input.workload * 2) + (input.goal.length / 100))
    );
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
    const rawScore =
      deadlineFit * 0.37 +
      workloadFit * 0.23 +
      dependencyFit * 0.22 +
      feasibility * 0.12 +
      coverage * 0.06;

    const productivityScore = Math.round(rawScore * 1000) / 10;

    // ======================
    // 7. CONFIDENCE (NOT FAKE 100%)
    // ======================
    const confidence =
      Math.round(
        (productivityScore * 0.7) +
        (feasibility * 100 * 0.3)
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