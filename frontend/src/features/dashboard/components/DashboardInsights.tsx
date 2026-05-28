import AIInsightCard from "./AIInsightCard";
import RecommendationCard from "./RecommendationCard";
import RiskAlertCard from "./RiskAlertCard";

function DashboardInsights() {
  return (
    <div className="space-y-6 h-full">

      <AIInsightCard />

      <RiskAlertCard />

      <RecommendationCard />

    </div>
  );
}

export default DashboardInsights;