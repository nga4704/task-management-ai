import MainLayout from "../../layouts/MainLayout";

import StatCard from "../../components/dashboard/StatCard";
import TaskCard from "../../components/dashboard/TaskCard";
import ActivityCard from "../../components/dashboard/ActivityCard";

function DashboardPage() {
  return (
    <MainLayout>
      <div className="grid grid-cols-12 gap-6">
        
        {/* Stats */}
        <div className="col-span-12 grid md:grid-cols-3 gap-6">
          <StatCard
            title="Total Tasks"
            value="128"
            growth="+12%"
          />

          <StatCard
            title="Completed"
            value="87"
            growth="+18%"
          />

          <StatCard
            title="Productivity"
            value="92%"
            growth="+5%"
          />
        </div>

        {/* Recent Tasks */}
        <div
          className="
            col-span-12
            lg:col-span-8
            bg-white
            rounded-[28px]
            p-6
            shadow-soft
          "
        >
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold">
              Recent Tasks
            </h2>

            <button className="text-secondary">
              View All
            </button>
          </div>

          <div className="mt-6 space-y-4">
            <TaskCard
              title="Design Dashboard UI"
              status="In Progress"
              date="May 25"
            />

            <TaskCard
              title="Build AI Prediction API"
              status="Review"
              date="May 27"
            />

            <TaskCard
              title="Database Optimization"
              status="Done"
              date="May 29"
            />
          </div>
        </div>

        {/* Activity */}
        <div
          className="
            col-span-12
            lg:col-span-4
            bg-white
            rounded-[28px]
            p-6
            shadow-soft
          "
        >
          <h2 className="text-2xl font-bold">
            Activity
          </h2>

          <div className="mt-6 space-y-6">
            <ActivityCard
              text="Task completed"
              time="2 mins ago"
            />

            <ActivityCard
              text="New project created"
              time="1 hour ago"
            />

            <ActivityCard
              text="Meeting scheduled"
              time="3 hours ago"
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default DashboardPage;