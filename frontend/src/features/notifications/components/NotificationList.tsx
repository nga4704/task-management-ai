import NotificationCard from "./NotificationCard";
import type { Notification } from "../types/notification.types";

type Props = {
  notifications: Notification[];
};

function NotificationList({ notifications }: Props) {
  if (!notifications?.length) {
    return (
      <div className="text-muted text-sm">
        No notifications
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