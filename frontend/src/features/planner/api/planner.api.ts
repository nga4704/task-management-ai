import api from "@/lib/api";

import type {
  PlannerFormValues,
  PlannerResponse,
} from "../types/planner.types";

export async function generateAIPlan(
  input: PlannerFormValues
): Promise<PlannerResponse> {
  const { data } =
    await api.post<PlannerResponse>(
      "/ai/planner/generate",
      {
        ...input,
        workload: Number(input.workload),
      }
    );

  return data;
}