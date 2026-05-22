import MainLayout from "../../layouts/MainLayout";

import AnalyticsHeader from "../../components/analytics/AnalyticsHeader";
import AnalyticsStatCard from "../../components/analytics/AnalyticsStatCard";
import ProductivityAreaChart from "../../components/analytics/ProductivityAreaChart";
import TaskCompletionChart from "../../components/analytics/TaskCompletionChart";
import TeamPerformanceCard from "../../components/analytics/TeamPerformanceCard";
import AIPredictionPanel from "../../components/analytics/AIPredictionPanel";
import WorkloadChart from "../../components/analytics/WorkloadChart";

function AnalyticsPage() {
  return (
    <MainLayout>
      <div className="space-y-6">

        <AnalyticsHeader />

        {/* KPI */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <AnalyticsStatCard
            title="Tasks Completed"
            value="128"
            growth="+12%"
          />

          <AnalyticsStatCard
            title="Productivity"
            value="87%"
            growth="+8%"
          />

          <AnalyticsStatCard
            title="AI Accuracy"
            value="91%"
            growth="+5%"
          />

          <AnalyticsStatCard
            title="Delayed Tasks"
            value="6"
            growth="-2%"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-12 gap-6">

          <div className="col-span-12 xl:col-span-8">
            <ProductivityAreaChart />
          </div>

          <div className="col-span-12 xl:col-span-4">
            <TaskCompletionChart />
          </div>

        </div>

        {/* Bottom */}
        <div className="grid grid-cols-12 gap-6">

          {/* Team */}
          <div className="col-span-12 xl:col-span-4">

            <div
              className="
                bg-white
                rounded-[28px]
                p-6
                shadow-soft
              "
            >
              <h2 className="text-2xl font-bold">
                Team Performance
              </h2>

              <div className="mt-6 space-y-4">
                <TeamPerformanceCard
                  name="Nga"
                  score="92%"
                />

                <TeamPerformanceCard
                  name="Minh"
                  score="85%"
                />

                <TeamPerformanceCard
                  name="Huy"
                  score="89%"
                />
              </div>

            </div>
          </div>

          {/* AI */}
          <div className="col-span-12 xl:col-span-4">
            <AIPredictionPanel />
          </div>

          {/* Workload */}
          <div className="col-span-12 xl:col-span-4">
            <WorkloadChart />
          </div>

        </div>

      </div>
    </MainLayout>
  );
}

export default AnalyticsPage;