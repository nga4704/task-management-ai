import MainLayout from "../../layouts/MainLayout";

import AIInsightsHeader from "../../components/ai-insights/AIInsightsHeader";
import AISummaryCard from "../../components/ai-insights/AISummaryCard";
import PredictionCard from "../../components/ai-insights/PredictionCard";
import RiskAnalysisCard from "../../components/ai-insights/RiskAnalysisCard";
import RecommendationCard from "../../components/ai-insights/RecommendationCard";
import TeamAIStats from "../../components/ai-insights/TeamAIStats";
import AIActivityItem from "../../components/ai-insights/AIActivityItem";

function AIInsightsPage() {
  return (
    <MainLayout>
      <div className="space-y-6">

        <AIInsightsHeader />

        {/* Summary */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
          <AISummaryCard
            title="AI Accuracy"
            value="91%"
            description="Prediction performance this week."
          />

          <AISummaryCard
            title="Detected Risks"
            value="6"
            description="Potential delayed tasks identified."
          />

          <AISummaryCard
            title="Optimization Rate"
            value="84%"
            description="Workflow improvement suggestion rate."
          />

          <AISummaryCard
            title="Team Efficiency"
            value="89%"
            description="AI-calculated productivity score."
          />
        </div>

        {/* Predictions */}
        <div className="grid grid-cols-12 gap-6">

          <div className="col-span-12 xl:col-span-8 space-y-6">

            <PredictionCard
              title="Project Completion Prediction"
              percentage={87}
            />

            <div
              className="
                bg-white
                rounded-[28px]
                p-6
                shadow-soft
              "
            >
              <h2 className="text-2xl font-bold">
                Risk Analysis
              </h2>

              <div className="mt-6 space-y-4">
                <RiskAnalysisCard
                  task="Backend API Integration"
                  risk="High Risk"
                />

                <RiskAnalysisCard
                  task="AI Training Pipeline"
                  risk="Medium Risk"
                />

                <RiskAnalysisCard
                  task="UI Testing"
                  risk="Low Risk"
                />
              </div>
            </div>

          </div>

          {/* Right */}
          <div className="col-span-12 xl:col-span-4 space-y-6">

            <RecommendationCard
              recommendation="
              Schedule backend tasks earlier this week
              to reduce predicted delivery delays.
              "
            />

            <div
              className="
                bg-white
                rounded-[28px]
                p-6
                shadow-soft
              "
            >
              <h2 className="text-2xl font-bold">
                Team AI Performance
              </h2>

              <div className="mt-6 space-y-4">
                <TeamAIStats
                  name="Nga"
                  productivity="92%"
                />

                <TeamAIStats
                  name="Minh"
                  productivity="85%"
                />

                <TeamAIStats
                  name="Huy"
                  productivity="88%"
                />
              </div>
            </div>

          </div>

        </div>

        {/* Activity */}
        <div
          className="
            bg-white
            rounded-[28px]
            p-6
            shadow-soft
          "
        >
          <h2 className="text-2xl font-bold">
            AI Activity Feed
          </h2>

          <div className="mt-6">
            <AIActivityItem
              activity="AI detected possible sprint delay"
              time="Today, 09:30 AM"
            />

            <AIActivityItem
              activity="Generated productivity recommendation"
              time="Yesterday"
            />

            <AIActivityItem
              activity="Updated prediction model"
              time="2 days ago"
            />
          </div>
        </div>

      </div>
    </MainLayout>
  );
}

export default AIInsightsPage;