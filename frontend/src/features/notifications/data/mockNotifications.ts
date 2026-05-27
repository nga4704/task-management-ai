// src/features/notifications/data/mockNotifications.ts

import type {
  Notification,
} from "../types/notification.types";

export const mockNotifications: Notification[] = [
  {
    id: "1",

    title: "AI detected workload spike",

    description:
      "Backend team workload may exceed safe threshold tomorrow.",

    time: "2 mins ago",

    read: false,

    type: "ai",
  },

  {
    id: "2",

    title: "Task moved to Review",

    description:
      "API Integration task is now ready for review.",

    time: "1 hour ago",

    read: false,

    type: "task",
  },

  {
    id: "3",

    title: "Sprint deadline risk",

    description:
      "AI predicts 82% delay probability for current sprint.",

    time: "3 hours ago",

    read: true,

    type: "warning",
  },

  {
    id: "4",

    title: "Workspace updated",

    description:
      "New files were added to the Design workspace.",

    time: "Yesterday",

    read: true,

    type: "system",
  },
];