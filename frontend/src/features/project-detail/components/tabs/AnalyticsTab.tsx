import CompletionChart from "../analytics/CompletionChart";
import WorkloadChart from "../analytics/WorkloadChart";
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
      <CompletionChart />

      <WorkloadChart />

      <div className="xl:col-span-2">
        <RiskAnalytics />
      </div>
    </div>
  );
}

export default AnalyticsTab;