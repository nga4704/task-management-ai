import axios from "axios";
import { buildPlannerPrompt } from "./aiPlanner.prompt";
import { PlannerInput, PlannerResponse } from "./aiPlanner.types";

export class AIPlannerService {
  private groq = axios.create({
    baseURL: "https://api.groq.com/openai/v1",
    headers: {
      Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      "Content-Type": "application/json",
    },
    timeout: 30000,
  });

  // =========================
  // MAIN ENTRY
  // =========================
  async generatePlan(input: PlannerInput): Promise<PlannerResponse> {
    const prompt = buildPlannerPrompt(input);

    const response = await this.groq.post("/chat/completions", {
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: "You are a SaaS AI Project Manager. Return ONLY JSON.",
        },
        { role: "user", content: prompt },
      ],
      temperature: 0.4,
    });

    const text = response.data?.choices?.[0]?.message?.content;

    if (!text) throw new Error("Empty response from AI");

    const parsed = this.safeParse(text);

    return this.enrichPlanner(parsed, input);
  }

  // =========================
  // SAFE PARSER (ANTI AI ERROR)
  // =========================
  private safeParse(text: string): PlannerResponse {
    try {
      const cleaned = text
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      const start = cleaned.indexOf("{");
      const end = cleaned.lastIndexOf("}");

      const json = cleaned.slice(start, end + 1);

      return JSON.parse(json);
    } catch (err) {
      return {
        tasks: [],
        summary: {
          riskLevel: "medium",
          recommendation: "Invalid AI output",
          estimatedDays: 0,
          productivityScore: 0,
          breakdown: {
            deadlineFit: 0,
            workloadFit: 0,
            complexity: 0,
          },
        },
        reasoning: ["Parse failed"],
      };
    }
  }

  // =========================
  // REAL CALENDAR HELPERS
  // =========================
  private addDays(date: Date, days: number): Date {
    const d = new Date(date);
    d.setDate(d.getDate() + days);
    return d;
  }

  private startOfDay(date: Date): Date {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    return d;
  }

  private formatDate(date: Date): string {
    return date.toLocaleDateString("en-GB"); // 28/06/2026
  }

  // =========================
  // MAIN SCHEDULER (FIXED)
  // =========================
  private enrichPlanner(
    data: PlannerResponse,
    input: PlannerInput
  ): PlannerResponse {
    const capacity = input.workload ?? 4; // 4h/day default

    const startDate = input.startDate
      ? this.startOfDay(new Date(input.startDate))
      : this.startOfDay(new Date());

    let currentDate = new Date(startDate);
    let usedHours = 0;

    const taskMap = new Map<string, any>();

    const tasks = data.tasks.map((task) => {
      const hours = task.durationHours ?? 1;
      const deps = task.dependsOn ?? [];

      // =========================
      // DEPENDENCY RESOLUTION
      // =========================
      let taskStartDate = new Date(currentDate);

      if (deps.length > 0) {
        const depEndDates = deps
          .map((id) => taskMap.get(id)?.endDate)
          .filter(Boolean) as Date[];

        if (depEndDates.length > 0) {
          const latestDepEnd = new Date(
            Math.max(...depEndDates.map((d) => d.getTime()))
          );

          taskStartDate = this.addDays(latestDepEnd, 1);
          currentDate = new Date(taskStartDate);
          usedHours = 0;
        }
      }

      // =========================
      // WORKLOAD ENFORCEMENT (REAL 4H/DAY)
      // =========================
      if (usedHours + hours > capacity) {
        currentDate = this.addDays(currentDate, 1);
        usedHours = 0;
        taskStartDate = new Date(currentDate);
      }

      const durationDays = Math.ceil(hours / capacity);
      const taskEndDate = this.addDays(taskStartDate, durationDays - 1);

      usedHours += hours;

      const enrichedTask = {
        ...task,

        // RAW DATE
        startDate: taskStartDate,
        endDate: taskEndDate,

        // UI FRIENDLY FORMAT
        startDateLabel: this.formatDate(taskStartDate),
        endDateLabel: this.formatDate(taskEndDate),

        allocatedHours: hours,
      };

      taskMap.set(task.id, enrichedTask);

      return enrichedTask;
    });

    return {
      ...data,
      tasks,

      summary: {
        ...data.summary,
        productivityScore: this.calculateScore(data),
      },
    };
  }

  // =========================
  // SCORE ENGINE (UNCHANGED)
  // =========================
  private calculateScore(data: PlannerResponse): number {
    const b = data.summary.breakdown;

    const score =
      b.deadlineFit * 0.4 +
      b.workloadFit * 0.35 +
      (1 - b.complexity) * 0.25;

    return Math.round(score * 100);
  }
}