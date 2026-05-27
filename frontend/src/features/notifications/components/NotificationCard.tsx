// src/features/notifications/components/NotificationCard.tsx

import {
  Bell,
} from "lucide-react";

import {
  notificationLabels,
  notificationStyles,
} from "../constants/notification";

import type {
  Notification,
} from "../types/notification.types";

type Props = Notification;

function NotificationCard({
  title,
  description,
  time,
  type,
  read,
}: Props) {
  return (
    <div
      className={`
        rounded-2xl
        border
        border-border
        bg-surface
        p-5
        transition-all

        ${
          !read
            ? "shadow-soft"
            : ""
        }
      `}
    >
      <div className="flex gap-4">

        <div
          className={`
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-2xl

            ${notificationStyles[type]}
          `}
        >
          <Bell size={20} />
        </div>

        <div className="flex-1">

          <div className="flex items-start justify-between gap-4">

            <div>
              <div
                className="
                  mb-2
                  inline-flex
                  rounded-full
                  bg-surfaceSecondary
                  px-3
                  py-1
                  text-xs
                  font-medium
                "
              >
                {notificationLabels[type]}
              </div>

              <h3
                className="
                  text-lg
                  font-semibold
                "
              >
                {title}
              </h3>

              <p
                className="
                  mt-2
                  leading-7
                  text-muted
                "
              >
                {description}
              </p>
            </div>

            {!read && (
              <div
                className="
                  mt-2
                  h-3
                  w-3
                  rounded-full
                  bg-primary
                "
              />
            )}
          </div>

          <p
            className="
              mt-4
              text-sm
              text-muted
            "
          >
            {time}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotificationCard;