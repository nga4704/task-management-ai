import axios from "axios";
import { buildPlannerPrompt } from "./aiPlanner.prompt";
import {
  PlannerInput,
  PlannerResponse,
  PlannerTask,
} from "./aiPlanner.types";
import { AIEvaluationService } from "./aiEvaluation.service";
import { CriticalPathService } from "./criticalPath.service";

export class AIPlannerService {
  private groq = axios.create({
    baseURL: "https://api.groq.com/openai/v1",
    headers: {
      Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      "Content-Type": "application/json",
    },
    timeout: 30000,
  });

  // ===================================================
  // MAIN ENTRY
  // ===================================================

  async generatePlan(
    input: PlannerInput
  ): Promise<PlannerResponse> {
    const prompt = buildPlannerPrompt(input);

    const response = await this.groq.post(
      "/chat/completions",
      {
        model: "llama-3.3-70b-versatile",
        temperature: 0.3,
        messages: [
          {
            role: "system",
            content:
              "You are a Senior SaaS AI Project Manager. Return ONLY valid JSON.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
      }
    );

    const text =
      response.data?.choices?.[0]?.message?.content;

    if (!text) {
      throw new Error("Empty response from AI.");
    }

    const parsed = this.safeParse(text);
    const sanitizedTasks = this.sanitizeDependencies(parsed.tasks);
    this.validateDAG(sanitizedTasks);

    parsed.tasks = sanitizedTasks;

    const planner = this.enrichPlanner(parsed, input);

    const evaluation =
      new AIEvaluationService().evaluate(
        planner.tasks,
        input
      );

    planner.summary = {
      ...planner.summary,
      recommendation:
        evaluation.recommendation,
      productivityScore:
        evaluation.productivityScore,
      breakdown: {
        deadlineFit:
          evaluation.deadlineFit,
        workloadFit:
          evaluation.workloadFit,
        complexity: evaluation.productivityScore > 80
          ? 0.2
          : evaluation.productivityScore > 60
            ? 0.5
            : 0.8,
      },
    };

    planner.reasoning = [
      ...planner.reasoning,
      `Confidence Score: ${evaluation.confidence}%`,
      ...evaluation.issues,
    ];

    return planner;
  }

  // ===================================================
  // SAFE JSON PARSER
  // ===================================================

  private safeParse(
    text: string
  ): PlannerResponse {
    try {
      const cleaned = text
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      const start = cleaned.indexOf("{");
      const end = cleaned.lastIndexOf("}");

      if (start === -1 || end === -1) {
        throw new Error("Invalid JSON");
      }

      const json = cleaned.slice(start, end + 1);
      const parsed = JSON.parse(json);

      return {
        tasks:
          (parsed.tasks ?? []) as PlannerTask[],

        summary: {
          riskLevel:
            parsed.summary?.riskLevel ??
            "medium",

          recommendation:
            parsed.summary?.recommendation ??
            "",

          estimatedDays:
            parsed.summary?.estimatedDays ??
            0,

          productivityScore:
            parsed.summary?.productivityScore ??
            0,

          breakdown: {
            deadlineFit:
              parsed.summary?.breakdown
                ?.deadlineFit ?? 0,

            workloadFit:
              parsed.summary?.breakdown
                ?.workloadFit ?? 0,

            complexity:
              parsed.summary?.breakdown
                ?.complexity ?? 0,
          },
        },

        reasoning:
          parsed.reasoning ?? [],
      };
    } catch (error) {
      console.error(
        "AI Parse Error:",
        error
      );

      return {
        tasks: [],

        summary: {
          riskLevel: "medium",

          recommendation:
            "AI returned invalid JSON.",

          estimatedDays: 0,
          productivityScore: 0,

          breakdown: {
            deadlineFit: 0,
            workloadFit: 0,
            complexity: 1,
          },
        },

        reasoning: [
          "AI response parsing failed.",
        ],
      };
    }
  }

  // ===================================================
  // BUILD DEPENDENCY GRAPH
  // ===================================================

  private buildDependencyGraph(
    tasks: PlannerTask[]
  ): Map<string, PlannerTask> {
    const graph =
      new Map<string, PlannerTask>();

    for (const task of tasks) {
      graph.set(task.id, {
        ...task,
        dependsOn: task.dependsOn ?? [],
      });
    }

    return graph;
  }

  // ===================================================
  // TOPOLOGICAL SORT
  // ===================================================

  private topologicalSort(
    graph: Map<string, PlannerTask>
  ): PlannerTask[] {
    const indegree =
      new Map<string, number>();

    const adjacency =
      new Map<string, string[]>();

    for (const task of graph.values()) {
      indegree.set(task.id, 0);
      adjacency.set(task.id, []);
    }

    for (const task of graph.values()) {
      for (const dep of task.dependsOn ?? []) {
        if (!graph.has(dep)) {
          console.warn(
            `Dependency "${dep}" not found.`
          );
          continue;
        }

        adjacency
          .get(dep)!
          .push(task.id);

        indegree.set(
          task.id,
          (indegree.get(task.id) ?? 0) + 1
        );
      }
    }

    const queue: PlannerTask[] = [];

    for (const task of graph.values()) {
      if (
        (indegree.get(task.id) ?? 0) === 0
      ) {
        queue.push(task);
      }
    }

    const ordered: PlannerTask[] = [];

    while (queue.length > 0) {
      const current = queue.shift()!;

      ordered.push(current);

      for (
        const next of adjacency.get(current.id) ??
        []
      ) {
        indegree.set(
          next,
          (indegree.get(next) ?? 0) - 1
        );

        if (
          (indegree.get(next) ?? 0) === 0
        ) {
          queue.push(graph.get(next)!);
        }
      }
    }

    if (ordered.length !== graph.size) {
      throw new Error(
        "Circular dependency detected in generated tasks."
      );
    }

    return ordered;
  }

  // ===================================================
  // SCHEDULE TASKS
  // ===================================================

  private scheduleTasks(
    orderedTasks: PlannerTask[],
    input: PlannerInput
  ): PlannerTask[] {

    const capacity = input.workload ?? 4;
    const calendar = new Map<string, number>();
    const result: PlannerTask[] = [];

    const sorted = [...orderedTasks].sort(
      (a, b) => this.priorityScore(b) - this.priorityScore(a)
    );

    for (const task of sorted) {

      let remaining = task.durationHours;
      let date = this.startOfDay(
        new Date(input.startDate ?? new Date())
      );

      const dependencyEndDates = (task.dependsOn ?? [])
        .map(dep => result.find(t => t.id === dep)?.endDate)
        .filter(Boolean) as Date[];

      if (dependencyEndDates.length > 0) {
        const maxEnd = new Date(
          Math.max(...dependencyEndDates.map(d => d.getTime()))
        );

        date = this.addDays(maxEnd, 1);
      }

      let startDate: Date | null = null;
      let endDate: Date | null = null;

      while (remaining > 0) {

        const key = this.formatDate(date);
        const used = calendar.get(key) ?? 0;

        if (used >= capacity) {
          date = this.addDays(date, 1);
          continue;
        }

        const canTake = Math.min(capacity - used, remaining);

        calendar.set(key, used + canTake);

        if (!startDate) startDate = new Date(date);
        endDate = new Date(date);

        remaining -= canTake;
      }

      result.push({
        ...task,
        startDate: startDate!,
        endDate: endDate!,
        startDateLabel: this.formatDate(startDate!),
        endDateLabel: this.formatDate(endDate!),
        allocatedHours: task.durationHours,
      });
    }

    return result;
  }

  // ===================================================
  // ENRICH PLANNER
  // ===================================================

  private enrichPlanner(
    data: PlannerResponse,
    input: PlannerInput
  ): PlannerResponse {
    const graph =
      this.buildDependencyGraph(
        data.tasks
      );

    const ordered =
      this.topologicalSort(graph);

    const cpm = new CriticalPathService().compute(ordered);


    const scheduled =
      this.scheduleTasks(
        ordered,
        input
      );

    let estimatedDays = 0;

    if (scheduled.length > 0) {
      const first =
        scheduled[0].startDate!;

      const last = scheduled.reduce(
        (latest, task) => {
          if (!task.endDate)
            return latest;

          return task.endDate > latest
            ? task.endDate
            : latest;
        },
        scheduled[0].endDate!
      );

      estimatedDays = Math.max(
        1,
        Math.ceil(
          (last.getTime() -
            first.getTime()) /
          (1000 * 60 * 60 * 24)
        ) + 1
      );
    }

    const enriched = scheduled.map(t => ({
      ...t,
      criticality:
        cpm.get(t.id)?.earliestStart === 0
          ? "CRITICAL"
          : "NORMAL"
    }));

    return {
      ...data,

      tasks: enriched,

      summary: {
        ...data.summary,
        estimatedDays,
      },
    };
  }

  private applyDependencyOrder(tasks: PlannerTask[]) {
    const map = new Map(tasks.map(t => [t.id, t]));

    const visited = new Set<string>();
    const result: PlannerTask[] = [];

    const dfs = (id: string) => {
      if (visited.has(id)) return;
      visited.add(id);

      const task = map.get(id);
      if (!task) return;

      for (const dep of task.dependsOn ?? []) {
        dfs(dep);
      }

      result.push(task);
    };

    for (const t of tasks) dfs(t.id);

    return result;
  }

  // ===================================================
  // HELPERS
  // ===================================================

  private addDays(
    date: Date,
    days: number
  ): Date {
    const d = new Date(date);

    d.setDate(
      d.getDate() + days
    );

    return d;
  }

  private startOfDay(
    date: Date
  ): Date {
    const d = new Date(date);

    d.setHours(0, 0, 0, 0);

    return d;
  }

  private formatDate(
    date: Date
  ): string {
    return date.toLocaleDateString(
      "en-GB"
    );
  }

  private sanitizeDependencies(tasks: PlannerTask[]): PlannerTask[] {
    const ids = new Set(tasks.map(t => t.id));

    return tasks.map(task => ({
      ...task,
      dependsOn: (task.dependsOn ?? []).filter(dep => ids.has(dep))
    }));
  }

  private validateDAG(tasks: PlannerTask[]) {
    const visited = new Set<string>();
    const stack = new Set<string>();

    const map = new Map(tasks.map(t => [t.id, t]));

    const dfs = (id: string): boolean => {
      if (stack.has(id)) return false;
      if (visited.has(id)) return true;

      visited.add(id);
      stack.add(id);

      const task = map.get(id);
      if (!task) return true;

      for (const dep of task.dependsOn ?? []) {
        if (!dfs(dep)) return false;
      }

      stack.delete(id);
      return true;
    };

    for (const t of tasks) {
      if (!dfs(t.id)) {
        throw new Error("Cyclic dependency detected (JIRA ENGINE)");
      }
    }
  }

  private priorityScore(task: PlannerTask): number {
    let score = 0;

    switch (task.priority) {
      case "high":
        score += 3;
        break;
      case "medium":
        score += 2;
        break;
      case "low":
        score += 1;
        break;
    }

    score += task.dependsOn?.length ?? 0;

    if (task.risk === "high") score += 2;

    return score;
  }

}

