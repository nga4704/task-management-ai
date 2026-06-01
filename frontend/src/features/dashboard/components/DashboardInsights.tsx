import AIInsightCard from "./AIInsightCard";
import RecommendationCard from "./RecommendationCard";
import RiskAlertCard from "./RiskAlertCard";

function DashboardInsights() {
  return (
    <section
      className="
        grid
        gap-5

        grid-cols-1
        xl:grid-cols-3
      "
    >
      {/* MAIN AI INSIGHT */}
      <div className="xl:col-span-2">
        <AIInsightCard />
      </div>

      {/* SIDE CARDS */}
      <div
        className="
          flex
          flex-col
          gap-5
        "
      >
        <RiskAlertCard />

        <RecommendationCard />
      </div>
    </section>
  );
}

export default DashboardInsights;