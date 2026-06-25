// src/features/notifications/types/notification.types.ts

export type NotificationType =
  | "ai"
  | "task"
  | "warning"
  | "system";

export type Notification = {
  id: string;

  receiver_id: string;

  title: string;

  message?: string | null;

  is_read: boolean | null;

  created_at: string | null;
};