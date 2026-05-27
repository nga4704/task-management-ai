// src/features/notifications/components/NotificationList.tsx

import NotificationCard from "./NotificationCard";

import {
  mockNotifications,
} from "../data/mockNotifications";

function NotificationList() {
  return (
    <div className="space-y-5">
      {mockNotifications.map(
        (notification) => (
          <NotificationCard
            key={notification.id}
            {...notification}
          />
        )
      )}
    </div>
  );
}

export default NotificationList;