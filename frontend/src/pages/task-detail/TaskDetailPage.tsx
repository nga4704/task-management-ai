import MainLayout from "../../layouts/MainLayout";

import TaskHeader from "../../components/task-detail/TaskHeader";
import TaskInfoCard from "../../components/task-detail/TaskInfoCard";
import SubtaskItem from "../../components/task-detail/SubtaskItem";
import CommentCard from "../../components/task-detail/CommentCard";
import ActivityTimeline from "../../components/task-detail/ActivityTimeline";
import AttachmentCard from "../../components/task-detail/AttachmentCard";

function TaskDetailPage() {
  return (
    <MainLayout>
      <div className="space-y-6">

        <TaskHeader />

        <div className="grid grid-cols-12 gap-6">

          {/* Left */}
          <div className="col-span-12 lg:col-span-8 space-y-6">

            {/* Task Info */}
            <div className="grid md:grid-cols-3 gap-6">
              <TaskInfoCard
                label="Due Date"
                value="June 12, 2026"
              />

              <TaskInfoCard
                label="Assignee"
                value="Nga"
              />

              <TaskInfoCard
                label="Sprint"
                value="Sprint 04"
              />
            </div>

            {/* Subtasks */}
            <div
              className="
                bg-white
                rounded-[28px]
                p-6
                shadow-soft
              "
            >
              <h2 className="text-2xl font-bold">
                Subtasks
              </h2>

              <div className="mt-6 space-y-4">
                <SubtaskItem
                  title="Design AI architecture"
                  completed
                />

                <SubtaskItem
                  title="Build prediction API"
                />

                <SubtaskItem
                  title="Train ML model"
                />
              </div>
            </div>

            {/* Comments */}
            <div
              className="
                bg-white
                rounded-[28px]
                p-6
                shadow-soft
              "
            >
              <h2 className="text-2xl font-bold">
                Comments
              </h2>

              <div className="mt-6 space-y-6">
                <CommentCard
                  name="Minh"
                  comment="The AI model integration is almost done."
                  time="2 hours ago"
                />

                <CommentCard
                  name="Huy"
                  comment="Need to optimize prediction performance."
                  time="5 hours ago"
                />
              </div>
            </div>

          </div>

          {/* Right */}
          <div className="col-span-12 lg:col-span-4 space-y-6">

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
                Activity
              </h2>

              <div className="mt-6">
                <ActivityTimeline
                  activity="Task status changed"
                  time="Today, 10:30 AM"
                />

                <ActivityTimeline
                  activity="New comment added"
                  time="Yesterday"
                />

                <ActivityTimeline
                  activity="Task created"
                  time="2 days ago"
                />
              </div>
            </div>

            {/* Attachments */}
            <div
              className="
                bg-white
                rounded-[28px]
                p-6
                shadow-soft
              "
            >
              <h2 className="text-2xl font-bold">
                Attachments
              </h2>

              <div className="mt-6 space-y-4">
                <AttachmentCard
                  name="AI_Document.pdf"
                  size="2.4 MB"
                />

                <AttachmentCard
                  name="wireframe.fig"
                  size="1.1 MB"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </MainLayout>
  );
}

export default TaskDetailPage;