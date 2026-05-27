import { useState } from "react";

import {
  generatedTasks,
} from "../data/mockPlanner";

export function useAIPlanner() {
  const [loading, setLoading] =
    useState(false);

  const [plans, setPlans] =
    useState(generatedTasks);

  const generatePlan = async () => {
    setLoading(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 1500)
    );

    setPlans(generatedTasks);

    setLoading(false);
  };

  return {
    plans,

    loading,

    generatePlan,
  };
}