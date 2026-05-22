import MainLayout from "../../layouts/MainLayout";

import ScheduleHeader from "../../components/schedule/ScheduleHeader";
import CalendarSection from "../../components/schedule/CalendarSection";
import DailyTaskCard from "../../components/schedule/DailyTaskCard";
import AISuggestionCard from "../../components/schedule/AISuggestionCard";
import WorkloadCard from "../../components/schedule/WorkloadCard";
import ProductivityChart from "../../components/schedule/ProductivityChart";

function SchedulePage() {
  return (
    <MainLayout>
      <div className="space-y-6">

        <ScheduleHeader />

        <div className="grid grid-cols-12 gap-6">

          {/* Left */}
          <div className="col-span-12 xl:col-span-8">
            <CalendarSection />
          </div>

          {/* Right */}
          <div className="col-span-12 xl:col-span-4 space-y-6">

            {/* Workload */}
            <div className="grid grid-cols-2 gap-4">
              <WorkloadCard
                title="Tasks"
                value="24"
              />

              <WorkloadCard
                title="Meetings"
                value="8"
              />
            </div>

            {/* Daily Tasks */}
            <div
              className="
                bg-white
                rounded-[28px]
                p-6
                shadow-soft
              "
            >
              <h2 className="text-2xl font-bold">
                Today's Tasks
              </h2>

              <div className="mt-6 space-y-4">
                <DailyTaskCard
                  title="Frontend Meeting"
                  time="09:00 AM"
                />

                <DailyTaskCard
                  title="AI Integration"
                  time="01:00 PM"
                />

                <DailyTaskCard
                  title="Sprint Review"
                  time="04:00 PM"
                />
              </div>
            </div>

            {/* AI Suggestions */}
            <AISuggestionCard
              suggestion="
              Your productivity is highest between
              9 AM and 12 PM. Schedule complex tasks
              during this period.
              "
            />

          </div>

        </div>

        <ProductivityChart />

      </div>
    </MainLayout>
  );
}

export default SchedulePage;