import MainLayout from "../../../app/layouts/MainLayout";

import PlannerHeader from "../components/PlannerHeader";
import PlannerStats from "../components/PlannerStats";
import PlannerForm from "../components/PlannerForm";
import AIScheduleResult from "../components/schedule/AIScheduleResult";

import { useAIPlanner } from "../hooks/useAIPlanner";

function PlannerPage() {
  const {
    plans,
    summary,
    reasoning,
    loading,
    generatePlan,
  } = useAIPlanner();

  return (
    <MainLayout
      title="AI Planner"
      description="AI-powered intelligent scheduling system"
    >
      <div className="space-y-6">
        <PlannerHeader />

        <PlannerStats />

        <PlannerForm
          onGenerate={generatePlan}
          loading={loading}
        />

        <AIScheduleResult
          plans={plans}
          summary={summary}
          reasoning={reasoning}
        />
      </div>
    </MainLayout>
  );
}

export default PlannerPage;