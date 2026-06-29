import NotificationCard from "./NotificationCard";
import { useNotifications } from "../hooks/useNotifications";

function NotificationList() {
  const { data: notifications = [], isLoading } = useNotifications();

  if (isLoading) {
    return (
      <div className="text-muted text-sm">
        Loading notifications...
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {notifications.map((notification) => (
        <NotificationCard
          key={notification.id}
          {...notification}
        />
      ))}
    </div>
  );
}

export default NotificationList;