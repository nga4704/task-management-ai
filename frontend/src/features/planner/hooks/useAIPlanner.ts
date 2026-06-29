import { useState } from "react";

import { generateAIPlan } from "../api/planner.api";

import type {
  PlannerTask,
  PlannerSummary,
  PlannerFormValues,
} from "../types/planner.types";

export function useAIPlanner() {
  const [plans, setPlans] =
    useState<PlannerTask[]>([]);

  const [summary, setSummary] =
    useState<PlannerSummary | null>(null);

  const [reasoning, setReasoning] =
    useState<string[]>([]);

  const [loading, setLoading] =
    useState(false);

  const generatePlan = async (
    input: PlannerFormValues
  ) => {
    try {
      setLoading(true);

      const data =
        await generateAIPlan(input);

      setPlans(data.tasks);

      setSummary(data.summary);

      setReasoning(data.reasoning);
    } catch (err) {
      console.error(
        "AI Planner Error:",
        err
      );

      setPlans([]);

      setSummary(null);

      setReasoning([
        "Unable to generate AI schedule.",
      ]);
    } finally {
      setLoading(false);
    }
  };

  return {
    plans,
    summary,
    reasoning,
    loading,
    generatePlan,
  };
}