// features/ai-planner/components/PlannerStats.tsx

import StatCard from "@/shared/components/cards/StatCard";

import { mockPlannerStats } from "../data/mockPlannerStats";

function PlannerStats() {
  return (
    <section
      className="
        grid
        grid-cols-1
        gap-5

        sm:grid-cols-2
        xl:grid-cols-4
      "
    >
      {mockPlannerStats.map((stat) => (
        <StatCard
          key={stat.title}
          {...stat}
        />
      ))}
    </section>
  );
}

export default PlannerStats;