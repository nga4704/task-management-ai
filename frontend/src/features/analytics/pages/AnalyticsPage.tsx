import MainLayout from "../../../app/layouts/MainLayout";

import AnalyticsHeader from "../components/AnalyticsHeader";

import AnalyticsStats from "../components/AnalyticsStats";

import ProductivityChart from "../components/ProductivityChart";

import AIInsightPanel from "../components/AIInsightPanel";

import WeeklyPerformance from "../components/WeeklyPerformance";

import RiskPredictionCard from "../components/RiskPredictionCard";

function AnalyticsPage() {
  return (
    <MainLayout
      title="Analytics"
      description="
        AI-powered productivity
        analytics and performance tracking
      "
    >
      <div className="space-y-6">

        {/* HERO */}
        <AnalyticsHeader />

        {/* STATS */}
        <AnalyticsStats />

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
            <ProductivityChart />

            <RiskPredictionCard />
          </div>

          {/* RIGHT */}
          <div
            className="
              col-span-12
              xl:col-span-4
              space-y-6
            "
          >
            <AIInsightPanel />

            <WeeklyPerformance />
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

export default AnalyticsPage;