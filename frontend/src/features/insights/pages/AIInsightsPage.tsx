// features/ai-insights/pages/AIInsightsPage.tsx

import MainLayout from "@/app/layouts/MainLayout";

import AIInsightsHeader from "../components/AIInsightsHeader";
import AIInsightsStats from "../components/AIInsightsStats";

/* RISK PREDICTION */
import RiskTaskList from "../components/risk/RiskTaskList";
import PredictionGauge from "../components/risk/PredictionGauge";
import RiskHeatmap from "../components/risk/RiskHeatmap";

/* SMART SCHEDULING */
import RecommendationList from "../components/scheduling/RecommendationList";
import SuggestedTimeline from "../components/scheduling/SuggestedTimeline";
import PriorityOptimizer from "../components/scheduling/PriorityOptimizer";

/* EXPLAINABLE AI */
import FeatureImportanceChart from "../components/explainable/FeatureImportanceChart";
import ReasonCards from "../components/explainable/ReasonCards";
import ConfidenceScore from "../components/explainable/ConfidenceScore";

function AIInsightsPage() {
  return (
    <MainLayout
      title="AI Insights"
      description="
        Predict project risks, optimize schedules
        and understand AI decision making
      "
    >
      <div className="space-y-8">
        {/* HERO */}
        <AIInsightsHeader />

        {/* STATS */}
        <AIInsightsStats />

        {/* ====================================== */}
        {/* SECTION 1 - RISK PREDICTION */}
        {/* ====================================== */}
        <section className="space-y-5">
          <div>
            <h2 className="text-2xl font-bold">
              Risk Prediction
            </h2>

            <p className="mt-1 text-muted">
              AI-powered delay prediction,
              workload analysis and sprint
              success forecasting.
            </p>
          </div>

          <div
            className="
              grid
              grid-cols-12
              gap-6
            "
          >
            {/* MAIN CONTENT */}
            <div
              className="
                col-span-12
                xl:col-span-8
              "
            >
              <RiskTaskList />
            </div>

            {/* SIDEBAR */}
            <div
              className="
                col-span-12
                xl:col-span-4

                space-y-6
              "
            >
              <PredictionGauge />

              <RiskHeatmap />
            </div>
          </div>
        </section>

        {/* ====================================== */}
        {/* SECTION 2 - SMART SCHEDULING */}
        {/* ====================================== */}
        <section className="space-y-5">
          <div>
            <h2 className="text-2xl font-bold">
              Smart Scheduling
            </h2>

            <p className="mt-1 text-muted">
              AI recommendations for workload
              balancing, priority optimization
              and productivity planning.
            </p>
          </div>

          <div
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
              <RecommendationList />

              <SuggestedTimeline />
            </div>

            {/* RIGHT */}
            <div
              className="
                col-span-12
                xl:col-span-4
              "
            >
              <PriorityOptimizer />
            </div>
          </div>
        </section>

        {/* ====================================== */}
        {/* SECTION 3 - EXPLAINABLE AI */}
        {/* ====================================== */}
        <section className="space-y-5">
          <div>
            <h2 className="text-2xl font-bold">
              Explainable AI
            </h2>

            <p className="mt-1 text-muted">
              Understand why AI generated
              predictions and recommendations
              through transparent reasoning.
            </p>
          </div>

          {/* TOP ROW */}
          <div
            className="
              grid
              grid-cols-12
              gap-6
            "
          >
            {/* FEATURE IMPORTANCE */}
            <div
              className="
                col-span-12
                xl:col-span-8
              "
            >
              <FeatureImportanceChart />
            </div>

            {/* CONFIDENCE */}
            <div
              className="
                col-span-12
                xl:col-span-4
              "
            >
              <ConfidenceScore />
            </div>
          </div>

          {/* REASONS */}
          <ReasonCards />
        </section>
      </div>
    </MainLayout>
  );
}

export default AIInsightsPage;