import MainLayout from "../../layouts/MainLayout";

import ProjectHero from "../../components/workspace/ProjectHero";
import TeamMemberCard from "../../components/workspace/TeamMemberCard";
import MilestoneCard from "../../components/workspace/MilestoneCard";
import ProgressCard from "../../components/workspace/ProgressCard";
import MeetingCard from "../../components/workspace/MeetingCard";

function WorkspacePage() {
  return (
    <MainLayout>
      <div className="space-y-6">

        <ProjectHero />

        <div className="grid grid-cols-12 gap-6">

          {/* Left */}
          <div className="col-span-12 lg:col-span-8 space-y-6">

            {/* Progress */}
            <div className="grid md:grid-cols-2 gap-6">
              <ProgressCard
                title="Project Progress"
                progress={78}
              />

              <ProgressCard
                title="Team Productivity"
                progress={92}
              />
            </div>

            {/* Milestones */}
            <div
              className="
                bg-white
                rounded-[28px]
                p-6
                shadow-soft
              "
            >
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">
                  Milestones
                </h2>

                <button className="text-secondary">
                  View All
                </button>
              </div>

              <div className="mt-6 space-y-4">
                <MilestoneCard
                  title="UI Design Completed"
                  date="May 30"
                  status="Done"
                />

                <MilestoneCard
                  title="Backend Integration"
                  date="June 5"
                  status="In Progress"
                />

                <MilestoneCard
                  title="AI Prediction Module"
                  date="June 12"
                  status="Upcoming"
                />
              </div>
            </div>

          </div>

          {/* Right */}
          <div className="col-span-12 lg:col-span-4 space-y-6">

            {/* Team */}
            <div
              className="
                bg-white
                rounded-[28px]
                p-6
                shadow-soft
              "
            >
              <h2 className="text-2xl font-bold">
                Team Members
              </h2>

              <div className="mt-6 space-y-4">
                <TeamMemberCard
                  name="Nga"
                  role="Frontend Developer"
                />

                <TeamMemberCard
                  name="Minh"
                  role="Backend Developer"
                />

                <TeamMemberCard
                  name="Huy"
                  role="AI Engineer"
                />
              </div>
            </div>

            {/* Meetings */}
            <div
              className="
                bg-white
                rounded-[28px]
                p-6
                shadow-soft
              "
            >
              <h2 className="text-2xl font-bold">
                Upcoming Meetings
              </h2>

              <div className="mt-6 space-y-4">
                <MeetingCard
                  title="Sprint Planning"
                  time="10:00 AM"
                />

                <MeetingCard
                  title="AI Discussion"
                  time="02:00 PM"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </MainLayout>
  );
}

export default WorkspacePage;