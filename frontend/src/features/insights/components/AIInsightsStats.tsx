import StatCard from "@/shared/components/cards/StatCard";

import {
  mockAIInsightStats,
} from "../data/mockAIInsightStats";

function AIInsightsStats() {
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
      {mockAIInsightStats.map((stat) => (
        <StatCard
          key={stat.title}
          {...stat}
        />
      ))}
    </section>
  );
}

export default AIInsightsStats;