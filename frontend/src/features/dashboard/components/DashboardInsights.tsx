import AIInsightCard from "./AIInsightCard";
import RecommendationCard from "./RecommendationCard";
import RiskAlertCard from "./RiskAlertCard";

import type {
  DashboardInsight as DashboardInsightsType,
} from "../types/dashboard.types";

type Props = {
  insights?: DashboardInsightsType;
};

function DashboardInsights({
  insights,
}: Props) {
  if (!insights) return null;

  return (
    <section
      className="
        grid
        gap-5
        grid-cols-1
        xl:grid-cols-3
      "
    >
      <div className="xl:col-span-2">
        <AIInsightCard
          insights={insights}
        />
      </div>

      <div
        className="
          flex
          flex-col
          gap-5
        "
      >
        <RiskAlertCard
          risk={insights.risk}
        />

        <RecommendationCard
          recommendation={
            insights.recommendation
          }
        />
      </div>
    </section>
  );
}

export default DashboardInsights;