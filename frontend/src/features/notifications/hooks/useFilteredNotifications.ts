import { useNotifications } from "./useNotifications";
import type { NotificationFilterState } from "./useNotificationFilter";

export const useFilteredNotifications = (
  filter: NotificationFilterState
) => {
  const query = useNotifications();

  const filtered = (query.data || []).filter((n) => {
    const search = filter.search.toLowerCase();

    const matchSearch =
      n.title.toLowerCase().includes(search) ||
      (n.message || "").toLowerCase().includes(search);

    const matchType =
      filter.type === "all"
        ? true
        : filter.type === "unread"
        ? !n.is_read
        : true;

    return matchSearch && matchType;
  });

  return {
    ...query,
    data: filtered,
  };
};