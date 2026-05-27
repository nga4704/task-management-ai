import {
  Brain,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

import AnalyticsStatCard from "./AnalyticsStatCard";

function AnalyticsStats() {
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
      <AnalyticsStatCard
        title="AI Productivity"
        value="92%"
        description="AI productivity optimization score"
        icon={<Brain />}
      />

      <AnalyticsStatCard
        title="Completed Tasks"
        value="148"
        description="Tasks completed this sprint"
        icon={<CheckCircle2 />}
      />

      <AnalyticsStatCard
        title="Performance Growth"
        value="+18%"
        description="Compared to last sprint"
        icon={<TrendingUp />}
      />

      <AnalyticsStatCard
        title="Risk Prediction"
        value="4"
        description="Tasks with high delay probability"
        icon={<AlertTriangle />}
      />
    </section>
  );
}

export default AnalyticsStats;