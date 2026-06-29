import MainLayout from "@/app/layouts/MainLayout";

import NotificationHeader from "../components/NotificationHeader";
import NotificationList from "../components/NotificationList";
import NotificationStats from "../components/NotificationStats";
import NotificationFilter from "../components/NotificationFilter";

import { useNotificationFilter } from "../hooks/useNotificationFilter";
import { useFilteredNotifications } from "../hooks/useFilteredNotifications";

function NotificationsPage() {
  const { filter, setFilter } = useNotificationFilter();

  const { data: notifications = [] } =
    useFilteredNotifications(filter);

  return (
    <MainLayout
      title="Notifications"
      description="AI-powered team updates"
    >
      <div className="space-y-6">

        <NotificationHeader />

        <NotificationStats />

        <NotificationFilter
          filter={filter}
          setFilter={setFilter}
        />

        <NotificationList
          notifications={notifications}
        />

      </div>
    </MainLayout>
  );
}

export default NotificationsPage;