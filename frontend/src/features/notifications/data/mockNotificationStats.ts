// features/notifications/data/mockNotificationStats.ts

import {
  Bell,
  Sparkles,
  MailOpen,
  AlertCircle,
} from "lucide-react";

export const notificationStats = [
  {
    title: "Total Notifications",
    value: "48",
    change: "+12%",
    description: "This week",
    icon: Bell,
  },

  {
    title: "AI Alerts",
    value: "12",
    change: "+18%",
    description: "AI-generated alerts",
    icon: Sparkles,
    highlight: true,
  },

  {
    title: "Unread",
    value: "7",
    change: "-3%",
    description: "Pending notifications",
    icon: MailOpen,
  },

  {
    title: "Critical",
    value: "2",
    change: "+1%",
    description: "Need attention",
    icon: AlertCircle,
  },
];