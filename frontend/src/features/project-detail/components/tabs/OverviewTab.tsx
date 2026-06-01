import ProjectStatistics from "../overview/ProjectStatistics";
import ProjectProgressChart from "../overview/ProjectProgressChart";
import RecentTasks from "../overview/RecentTasks";
import ProjectAIInsights from "../overview/ProjectAIInsights";

function OverviewTab() {
  return (
    <div className="space-y-6">
      <ProjectStatistics />

      <div
        className="
          grid
          gap-6

          xl:grid-cols-3
        "
      >
        <div className="xl:col-span-2">
          <ProjectProgressChart />
        </div>

        <ProjectAIInsights />
      </div>

      <RecentTasks />
    </div>
  );
}

export default OverviewTab;