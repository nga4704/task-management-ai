// src/features/notifications/types/notification.types.ts

export type NotificationType =
  | "ai"
  | "task"
  | "warning"
  | "system";

export interface Notification {
  id: string;

  title: string;

  description: string;

  time: string;

  read: boolean;

  type: NotificationType;
}