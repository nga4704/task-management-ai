import { PlannerInput } from "./aiPlanner.types";

export const buildPlannerPrompt = (input: PlannerInput) => {
  return `
You are a Senior SaaS-Level AI Project Manager.

You must plan tasks with REAL resource constraints.

INPUT:
- Goal: ${input.goal}
- Deadline: ${input.deadline}
- Daily Workload Capacity: ${input.workload} hours/day

RULES (CRITICAL):
- NEVER exceed workload capacity per day
- Tasks must be sequential when dependency exists
- MUST generate realistic scheduling
- MUST use full resource allocation logic
- MUST NOT overlap tasks beyond capacity

OUTPUT FORMAT (STRICT JSON ONLY):

{
  "tasks": [
    {
      "id": "t1",
      "title": "string",
      "priority": "high | medium | low",

      "durationHours": number,
      "allocatedHours": number,

      "aiNote": "string",

      "dependsOn": ["t0"],
      "risk": "low | medium | high",

      "startDay": number,
      "endDay": number
    }
  ],

  "summary": {
    "riskLevel": "low | medium | high",
    "recommendation": "string",
    "estimatedDays": number,

    "productivityScore": number,

    "breakdown": {
      "deadlineFit": number,
      "workloadFit": number,
      "complexity": number
    }
  },

  "reasoning": ["string"]
}
`;
};