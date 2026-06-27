import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import MainLayout from "@/app/layouts/MainLayout";

import DashboardHero from "../components/DashboardHero";
import DashboardStats from "../components/DashboardStats";
import DashboardInsights from "../components/DashboardInsights";
import PrioritizedTasks from "../components/PrioritizedTasks";
import TeamActivities from "../components/TeamActivities";

import useDashboard from "../hooks/useDashboard";

import { useActiveProject } from "@/shared/hooks/useActiveProject";
import { useActiveTeam } from "@/shared/hooks/useActiveTeam";
import { useTeams } from "@/features/teams/hooks/useTeams";

function DashboardPage() {
  const navigate = useNavigate();

  const { data: teams, isLoading } = useTeams();

  const { teamId } = useActiveTeam();

  const {
    projectId,
    projectName,
  } = useActiveProject();

  const {
    overview,
    sprintProgress,
    tasks,
    activities,
    insights,
    loading,
  } = useDashboard(teamId ?? "");

  useEffect(() => {
    if (!isLoading && (!teams || teams.length === 0)) {
      navigate("/teams");
    }
  }, [teams, isLoading, navigate]);

  if (loading) {
    return (
      <MainLayout
        title="Dashboard"
        description="Loading..."
      >
        Loading...
      </MainLayout>
    );
  }

  return (
    <MainLayout
      title="Dashboard"
      description="AI-powered productivity overview"
    >
      <div className="space-y-6">

        <DashboardHero
          projectId={projectId}
          projectName={projectName}
          sprintProgress={sprintProgress}
        />

        <DashboardStats overview={overview} />

        <DashboardInsights
          insights={insights}
        />

        <section
          className="
            grid
            grid-cols-12
            gap-6
          "
        >
          <div className="col-span-12 xl:col-span-8">
            <PrioritizedTasks
              tasks={tasks}
            />
          </div>

          <div className="col-span-12 xl:col-span-4">
            <TeamActivities
              activities={activities}
            />
          </div>
        </section>

      </div>
    </MainLayout>
  );
}

export default DashboardPage;