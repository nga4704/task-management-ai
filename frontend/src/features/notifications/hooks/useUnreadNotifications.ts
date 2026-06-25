import { useNotifications } from "./useNotifications";

export const useUnreadNotifications = () => {
  const { data: notifications = [] } = useNotifications();

  const unreadCount = notifications.filter(
    (n) => !n.is_read
  ).length;

  return { unreadCount };
};