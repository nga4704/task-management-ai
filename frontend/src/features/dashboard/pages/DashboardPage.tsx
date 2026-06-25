import MainLayout from "../../../app/layouts/MainLayout";

import DashboardHero from "../components/DashboardHero";
import DashboardStats from "../components/DashboardStats";
import DashboardInsights from "../components/DashboardInsights";
import PrioritizedTasks from "../components/PrioritizedTasks";
import TeamActivities from "../components/TeamActivities";

import useDashboard from "../hooks/useDashboard";

import {
  useActiveProject,
} from "@/shared/hooks/useActiveProject";

import {
  useParams,
} from "react-router-dom";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTeams } from "@/features/teams/hooks/useTeams";


function DashboardPage() {

  const navigate = useNavigate();
  const { data: teams, isLoading } = useTeams();

  const { teamId } =
    useParams();

  const { overview } =
    useDashboard(
      teamId || ""
    );

  const {
    projectId,
    projectName,
  } =
    useActiveProject();

  useEffect(() => {
    if (!isLoading && (!teams || teams.length === 0)) {
      navigate("/teams");
    }
  }, [teams, isLoading]);

  return (
    <MainLayout
      title="Dashboard"
      description="AI-powered productivity overview"
    >
      <div className="space-y-6">

        <DashboardHero
          projectId={projectId}
          projectName={
            projectName ||
            "No Project Selected"
          }
        />

        <DashboardStats
          overview={overview}
        />

        <DashboardInsights />

        <section
          className="
            grid
            grid-cols-12
            gap-6
          "
        >
          <div className="col-span-12 xl:col-span-8">
            <PrioritizedTasks />
          </div>

          <div className="col-span-12 xl:col-span-4">
            <TeamActivities />
          </div>
        </section>

      </div>
    </MainLayout>
  );
}

export default DashboardPage;