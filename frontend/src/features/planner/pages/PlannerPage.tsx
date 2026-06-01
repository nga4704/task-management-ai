import MainLayout from "../../../app/layouts/MainLayout";

import PlannerHeader from "../components/PlannerHeader";

import PlannerStats from "../components/PlannerStats";

import PlannerForm from "../components/PlannerForm";

import GeneratedPlanCard from "../components/GeneratedPlanCard";

import AIRecommendationCard from "../components/AIRecommendationCard";

import ScheduleTimeline from "../components/ScheduleTimeline";

import ProductivityScoreCard from "../components/ProductivityScoreCard";

import {
  useAIPlanner,
} from "../hooks/useAIPlanner";

function PlannerPage() {
  const {
    plans,

    loading,

    generatePlan,
  } = useAIPlanner();

  return (
    <MainLayout
      title="AI Planner"
      description="
        AI-powered intelligent planning
        and schedule optimization
      "
    >
      <div className="space-y-6">

        {/* HERO */}
        <PlannerHeader />

        {/* STATS */}
        <PlannerStats />

        {/* CONTENT */}
        <section
          className="
            grid
            grid-cols-12
            gap-6
          "
        >
          {/* LEFT */}
          <div
            className="
              col-span-12
              xl:col-span-8
              space-y-6
            "
          >
            <PlannerForm
              onGenerate={generatePlan}
              loading={loading}
            />

            <div
              className="
                grid
                grid-cols-1
                gap-6
                lg:grid-cols-2
              "
            >
              {plans.map((task) => (
                <GeneratedPlanCard
                  key={task.id}
                  task={task}
                />
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="
              col-span-12
              xl:col-span-4
              space-y-6
            "
          >
            <AIRecommendationCard />

            <ProductivityScoreCard />

            <ScheduleTimeline />
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

export default PlannerPage;