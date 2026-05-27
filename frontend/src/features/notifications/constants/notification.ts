// src/features/notifications/constants/notification.ts

import type {
  NotificationType,
} from "../types/notification.types";

export const notificationStyles: Record<
  NotificationType,
  string
> = {
  ai: `
    bg-primaryLight
    text-black
  `,

  task: `
    bg-infoLight
    text-info
  `,

  warning: `
    bg-dangerLight
    text-danger
  `,

  system: `
    bg-surfaceSecondary
    text-muted
  `,
};

export const notificationLabels: Record<
  NotificationType,
  string
> = {
  ai: "AI Insight",

  task: "Task Update",

  warning: "Warning",

  system: "System",
};