import MainLayout from "../../layouts/MainLayout";

import SmartScheduleHeader from "../../components/smart-schedule/SmartScheduleHeader";
import ScheduleSummaryCard from "../../components/smart-schedule/ScheduleSummaryCard";
import SmartTimelineItem from "../../components/smart-schedule/SmartTimelineItem";
import FocusBlockCard from "../../components/smart-schedule/FocusBlockCard";
import OptimizationSuggestion from "../../components/smart-schedule/OptimizationSuggestion";
import AutoScheduleCard from "../../components/smart-schedule/AutoScheduleCard";
import EfficiencyCard from "../../components/smart-schedule/EfficiencyCard";

function SmartSchedulePage() {
  return (
    <MainLayout>
      <div className="space-y-6">

        <SmartScheduleHeader />

        {/* Summary */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
          <ScheduleSummaryCard
            title="Planned Tasks"
            value="24"
            description="AI-organized tasks this week."
          />

          <ScheduleSummaryCard
            title="Focus Hours"
            value="18h"
            description="Predicted deep work duration."
          />

          <ScheduleSummaryCard
            title="Efficiency Gain"
            value="+21%"
            description="Optimized schedule productivity."
          />

          <ScheduleSummaryCard
            title="Conflicts Resolved"
            value="7"
            description="AI detected and fixed overlaps."
          />
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-12 gap-6">

          {/* Timeline */}
          <div className="col-span-12 xl:col-span-8 space-y-6">

            <div
              className="
                bg-white
                rounded-[28px]
                p-6
                shadow-soft
              "
            >
              <h2 className="text-2xl font-bold">
                Smart Timeline
              </h2>

              <div className="mt-6 space-y-4">
                <SmartTimelineItem
                  title="AI Sprint Planning"
                  time="09:00 AM"
                  type="Priority Task"
                />

                <SmartTimelineItem
                  title="Frontend Deep Work"
                  time="11:00 AM"
                  type="Focus Block"
                />

                <SmartTimelineItem
                  title="Backend Integration"
                  time="02:00 PM"
                  type="Optimized Schedule"
                />
              </div>
            </div>

            {/* Suggestions */}
            <div className="grid md:grid-cols-2 gap-6">

              <OptimizationSuggestion
                suggestion="
                Move heavy cognitive tasks to the morning
                for better productivity performance.
                "
              />

              <OptimizationSuggestion
                suggestion="
                Reduce meeting duration by 20%
                to improve focus efficiency.
                "
              />

            </div>

          </div>

          {/* Right */}
          <div className="col-span-12 xl:col-span-4 space-y-6">

            <FocusBlockCard
              title="Deep Work Session"
              duration="3 Hours"
            />

            <AutoScheduleCard />

            <div
              className="
                bg-white
                rounded-[28px]
                p-6
                shadow-soft
                space-y-5
              "
            >
              <h2 className="text-2xl font-bold">
                Schedule Efficiency
              </h2>

              <EfficiencyCard
                title="Focus Time"
                percentage={91}
              />

              <EfficiencyCard
                title="Task Balance"
                percentage={84}
              />

              <EfficiencyCard
                title="Meeting Optimization"
                percentage={76}
              />
            </div>

          </div>

        </div>

      </div>
    </MainLayout>
  );
}

export default SmartSchedulePage;