import MainLayout from "../../../app/layouts/MainLayout";

import DashboardHero from "../components/DashboardHero";

import DashboardStats from "../components/DashboardStats";

import DashboardInsights from "../components/DashboardInsights";

import PrioritizedTasks from "../components/PrioritizedTasks";

import TeamActivities from "../components/TeamActivities";

function DashboardPage() {
  return (
    <MainLayout
      title="Dashboard"
      description="AI-powered productivity overview"
    >
      <div className="space-y-6">

        <DashboardHero />

        <DashboardStats />

        <DashboardInsights />

        <section
          className="
            grid
            grid-cols-12
            gap-6
          "
        >
          <div
            className="
              col-span-12
              xl:col-span-8
            "
          >
            <PrioritizedTasks />
          </div>

          <div
            className="
              col-span-12
              xl:col-span-4
            "
          >
            <TeamActivities />
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

export default DashboardPage;