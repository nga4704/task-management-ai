// src/features/notifications/pages/NotificationsPage.tsx

import MainLayout from "@/app/layouts/MainLayout";

import NotificationFilter from "../components/NotificationFilter";
import NotificationHeader from "../components/NotificationHeader";
import NotificationList from "../components/NotificationList";
import NotificationStats from "../components/NotificationStats";

function NotificationsPage() {
  return (
    <MainLayout
      title="Notifications"
      description="AI-powered team updates"
    >
      <div className="space-y-6">

        <NotificationHeader />

        <NotificationStats />

        <NotificationFilter />

        <NotificationList />

      </div>
    </MainLayout>
  );
}

export default NotificationsPage;