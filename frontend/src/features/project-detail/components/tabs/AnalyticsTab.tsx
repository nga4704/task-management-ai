import CompletionChart from "../analytics/CompletionChart";
import RiskAnalytics from "../analytics/RiskAnalytics";

function AnalyticsTab() {
  return (
    <div
      className="
        grid
        gap-6
        xl:grid-cols-2
      "
    >
      {/* Sprint progress */}
      <CompletionChart />

      {/* AI risk */}
      <RiskAnalytics />
    </div>
  );
}

export default AnalyticsTab;