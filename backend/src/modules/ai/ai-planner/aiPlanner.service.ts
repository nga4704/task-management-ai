import axios from "axios";
import { buildPlannerPrompt } from "./aiPlanner.prompt";
import {
  PlannerInput,
  PlannerResponse,
  PlannerTask,
} from "./aiPlanner.types";
import { AIEvaluationService } from "./aiEvaluation.service";

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
    const capacity =
      input.workload ?? 4;

    const projectStart =
      input.startDate
        ? this.startOfDay(
          new Date(input.startDate)
        )
        : this.startOfDay(new Date());

    const scheduled =
      new Map<string, PlannerTask>();

    const workload =
      new Map<string, number>();

    const result: PlannerTask[] = [];

    for (const task of orderedTasks) {
      const duration =
        task.durationHours ?? 1;

      let start =
        new Date(projectStart);

      if (
        task.dependsOn &&
        task.dependsOn.length > 0
      ) {
        let latest =
          new Date(projectStart);

        for (const dep of task.dependsOn) {
          const parent =
            scheduled.get(dep);

          if (
            parent &&
            parent.endDate &&
            parent.endDate > latest
          ) {
            latest =
              new Date(parent.endDate);
          }
        }

        start = this.addDays(latest, 1);
      }

      while (true) {
        const key =
          this.formatDate(start);

        const used =
          workload.get(key) ?? 0;

        if (used < capacity) break;

        start = this.addDays(start, 1);
      }

      let remainingHours = duration;

      let currentDate =
        new Date(start);

      let actualStart =
        new Date(start);

      let actualEnd =
        new Date(start);

      while (remainingHours > 0) {
        const dayKey =
          this.formatDate(currentDate);

        const usedToday =
          workload.get(dayKey) ?? 0;

        const freeToday =
          capacity - usedToday;

        if (freeToday <= 0) {
          currentDate =
            this.addDays(currentDate, 1);

          continue;
        }

        const allocated = Math.min(
          remainingHours,
          freeToday
        );

        workload.set(
          dayKey,
          usedToday + allocated
        );

        remainingHours -= allocated;

        actualEnd =
          new Date(currentDate);

        if (remainingHours > 0) {
          currentDate =
            this.addDays(currentDate, 1);
        }
      }

      const scheduledTask: PlannerTask = {
        ...task,

        startDate: actualStart,
        endDate: actualEnd,

        startDateLabel:
          this.formatDate(actualStart),

        endDateLabel:
          this.formatDate(actualEnd),

        allocatedHours:
          task.durationHours ?? 1,
      };

      scheduled.set(
        task.id,
        scheduledTask
      );

      result.push(scheduledTask);
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

    return {
      ...data,

      tasks: scheduled,

      summary: {
        ...data.summary,
        estimatedDays,
      },
    };
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
}