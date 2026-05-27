import PlannerStatCard from "./PlannerStatCard";

function PlannerStats() {
  return (
    <section
      className="
        grid
        grid-cols-1
        gap-6
        md:grid-cols-2
        xl:grid-cols-4
      "
    >
      <PlannerStatCard
        title="AI Efficiency"
        value="92%"
      />

      <PlannerStatCard
        title="Focus Sessions"
        value="18"
      />

      <PlannerStatCard
        title="Tasks Optimized"
        value="124"
      />

      <PlannerStatCard
        title="Time Saved"
        value="12h"
      />
    </section>
  );
}

export default PlannerStats;