import StatCard from "@/shared/components/cards/StatCard";
import { useNotifications } from "../hooks/useNotifications";
import {
  Bell,
  Sparkles,
  MailOpen,
  AlertCircle,
} from "lucide-react";

function NotificationStats() {
  const { data: notifications = [] } = useNotifications();

  const total = notifications.length;

  const unread = notifications.filter((n) => !n.is_read).length;

  const ai = notifications.filter((n) =>
    n.title.toLowerCase().includes("ai")
  ).length;

  const warning = notifications.filter((n) =>
    n.title.toLowerCase().includes("risk") ||
    n.title.toLowerCase().includes("warning")
  ).length;

  const stats = [
    {
      title: "Total Notifications",
      value: total,
      description: "All notifications",
      icon: Bell,
    },
    {
      title: "AI Alerts",
      value: ai,
      description: "AI generated",
      icon: Sparkles,
      highlighted: true,
    },
    {
      title: "Unread",
      value: unread,
      description: "Need attention",
      icon: MailOpen,
    },
    {
      title: "Warnings",
      value: warning,
      description: "Critical alerts",
      icon: AlertCircle,
      trend: (warning > 0 ? "negative" : "positive") as "positive" | "negative"
    },
  ];

  return (
    <section
      className="
        grid
        grid-cols-1
        gap-5
        sm:grid-cols-2
        xl:grid-cols-4
      "
    >
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          {...stat}
        />
      ))}
    </section>
  );
}

export default NotificationStats;