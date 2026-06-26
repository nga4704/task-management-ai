import { useParams } from "react-router-dom";

import { useProjectOverview }
  from "../../hooks/useProjectOverview";

import ProjectStatistics from "../overview/ProjectStatistics";
import ProjectAIInsights from "../overview/ProjectAIInsights";
import SprintHealthCard from "../overview/SprintHealthCard";
import TeamWorkloadCard from "../overview/TeamWorkloadCard";
import ProjectActivity from "../overview/ProjectActivity";
import RecentTasks from "../overview/RecentTasks";

function OverviewTab() {
  const { projectId } = useParams();

  const {
    data,
    isLoading,
  } = useProjectOverview(projectId!);

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">

      <ProjectStatistics
        statistics={data.statistics}
      />

      {/* AI + Sprint */}
      <div className="grid gap-6 lg:grid-cols-3">

        <div className="lg:col-span-2">
          <ProjectAIInsights
            ai={data.ai}
          />
        </div>

        <SprintHealthCard
          statistics={data.statistics}
        />

      </div>

      {/* Workload */}
      <TeamWorkloadCard
        workload={data.workload}
      />

      {/* Activity */}
      <ProjectActivity projectId={projectId!} />

      {/* Recent Tasks */}
      <RecentTasks
        tasks={data.recentTasks}
      />

    </div>
  );
}

export default OverviewTab;