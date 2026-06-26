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

  async generatePlan(input: PlannerInput): Promise<PlannerResponse> {
    const prompt = buildPlannerPrompt(input);

    const response = await this.groq.post("/chat/completions", {
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content:
            "You are a SaaS AI Project Manager. Return ONLY JSON.",
        },
        { role: "user", content: prompt },
      ],
      temperature: 0.4,
    });

    const text = response.data?.choices?.[0]?.message?.content;

    if (!text) throw new Error("Empty response");

    const parsed = this.safeParse(text);

    return this.enrichPlanner(parsed, input);
  }

  // =========================
  // SAFE PARSER
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
  // (1) SCHEDULING ENGINE FIX
  // =========================
  private enrichPlanner(
    data: PlannerResponse,
    input: PlannerInput
  ): PlannerResponse {
    const capacity = input.workload; // 6h/day

    let day = 1;
    let used = 0;

    const tasks = data.tasks.map((task) => {
      const hours = task.durationHours ?? 1;

      // dependency enforcement (FIX #2 support)
      const deps = task.dependsOn || [];

      if (deps.length > 0) {
        // phụ thuộc → đẩy sang sau task trước
        day += 1;
        used = 0;
      }

      if (used + hours > capacity) {
        day += 1;
        used = 0;
      }

      const startDay = day;
      const endDay = Math.max(day, startDay + Math.ceil(hours / capacity) - 1);

      used += hours;

      return {
        ...task,
        startDay,
        endDay,
        allocatedHours: hours,
      };
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
  // (3) SCORE FORMULA FIX
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