import {
  teamPerformance,
} from "../data/mockAnalytics";

import TeamPerformanceCard from "./TeamPerformanceCard";

function WeeklyPerformance() {
  return (
    <section
      className="
        rounded-xl
        border
        border-border
        bg-surface
        p-6
        shadow-soft
      "
    >
      <div>
        <h2 className="text-2xl font-bold">
          Team Performance
        </h2>

        <p className="mt-1 text-muted">
          AI-based team productivity score
        </p>
      </div>

      <div className="mt-6 space-y-4">

        {teamPerformance.map((item) => (
          <TeamPerformanceCard
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </section>
  );
}

export default WeeklyPerformance;