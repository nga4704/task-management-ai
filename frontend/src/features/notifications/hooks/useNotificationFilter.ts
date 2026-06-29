import { useState } from "react";

export type FilterType =
  | "all"
  | "unread"
  | "ai"
  | "task"
  | "warning";

export type NotificationFilterState = {
  search: string;
  type: FilterType;
};

export const useNotificationFilter = () => {
  const [filter, setFilter] =
    useState<NotificationFilterState>({
      search: "",
      type: "all",
    });

  return {
    filter,
    setFilter,
  };
};