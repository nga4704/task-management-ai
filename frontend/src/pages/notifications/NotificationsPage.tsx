import MainLayout from "../../layouts/MainLayout";

import NotificationsHeader from "../../components/notifications/NotificationsHeader";
import NotificationFilter from "../../components/notifications/NotificationFilter";
import NotificationCard from "../../components/notifications/NotificationCard";
import AIAlertCard from "../../components/notifications/AIAlertCard";
import ActivityTimelineItem from "../../components/notifications/ActivityTimelineItem";

function NotificationsPage() {
  return (
    <MainLayout>
      <div className="space-y-6">

        <NotificationsHeader />

        <NotificationFilter />

        <div className="grid grid-cols-12 gap-6">

          {/* Left */}
          <div className="col-span-12 xl:col-span-8 space-y-5">

            <NotificationCard
              title="Task Deadline Reminder"
              description="
              Your AI Integration task is due tomorrow.
              "
              time="5 min ago"
              unread
            />

            <NotificationCard
              title="Mentioned in Workspace"
              description="
              Minh mentioned you in Sprint Planning discussion.
              "
              time="20 min ago"
            />

            <NotificationCard
              title="Task Status Updated"
              description="
              Backend API task moved to Completed.
              "
              time="1 hour ago"
            />

            <NotificationCard
              title="New Smart Recommendation"
              description="
              AI generated a new productivity suggestion.
              "
              time="Yesterday"
            />

          </div>

          {/* Right */}
          <div className="col-span-12 xl:col-span-4 space-y-6">

            <AIAlertCard />

            <div
              className="
                bg-white
                rounded-[28px]
                p-6
                shadow-soft
              "
            >
              <h2 className="text-2xl font-bold">
                Activity Timeline
              </h2>

              <div className="mt-6">
                <ActivityTimelineItem
                  activity="AI updated project prediction"
                  time="Today"
                />

                <ActivityTimelineItem
                  activity="Task deadline approaching"
                  time="Yesterday"
                />

                <ActivityTimelineItem
                  activity="Workspace activity detected"
                  time="2 days ago"
                />
              </div>

            </div>

          </div>

        </div>

      </div>
    </MainLayout>
  );
}

export default NotificationsPage;