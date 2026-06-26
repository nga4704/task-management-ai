import { useState } from "react";
import api from "@/lib/api";

import type { GeneratedTask } from "../types/planner.types";

export function useAIPlanner() {
  const [plans, setPlans] = useState<GeneratedTask[]>([]);
  const [summary, setSummary] = useState(null);
  const [reasoning, setReasoning] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const generatePlan = async (input: {
    goal: string;
    deadline: string;
    workload: string;
  }) => {
    try {
      setLoading(true);

      const res = await api.post(
        "/ai/planner/generate",
        input
      );

      setPlans(res.data.tasks);
      setSummary(res.data.summary);
      setReasoning(res.data.reasoning);
    } catch (err) {
      console.error("AI Planner error:", err);
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