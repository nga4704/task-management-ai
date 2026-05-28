// features/analytics/components/AnalyticsStats.tsx

import StatCard from "@/shared/components/cards/StatCard";

import { analyticsStats } from "../data/mockAnalyticsStats.ts";

function AnalyticsStats() {
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
      {analyticsStats.map((stat) => (
        <StatCard
          key={stat.title}
          {...stat}
        />
      ))}
    </section>
  );
}

export default AnalyticsStats;