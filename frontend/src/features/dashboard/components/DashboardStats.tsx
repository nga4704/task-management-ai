import {
  FolderKanban,
  CheckCircle2,
  Clock3,
  LoaderCircle,
} from "lucide-react";

import StatCard from "@/shared/components/cards/StatCard";

import type {
  DashboardOverview,
} from "../types/dashboard.types";

type Props = {
  overview?: DashboardOverview;
};

function DashboardStats({
  overview,
}: Props) {

  const stats = [
    {
      title: "Projects",

      value: overview?.totalProjects ?? 0,

      change: "",

      description: "Active projects",

      icon: FolderKanban,
    },

    {
      title: "Completed",

      value: overview?.completedTasks ?? 0,

      change: "",

      description: "Finished tasks",

      icon: CheckCircle2,
    },

    {
      title: "In Progress",

      value: overview?.inProgressTasks ?? 0,

      change: "",

      description: "Current work",

      icon: LoaderCircle,
    },

    {
      title: "Overdue",

      value: overview?.overdueTasks ?? 0,

      change: "",

      description: "Need attention",

      icon: Clock3,

      trend: "negative" as const,
    },
  ];

  return (
    <section
      className="
        grid
        grid-cols-1
        gap-6
        md:grid-cols-2
        xl:grid-cols-4
      "
    >
      {stats.map((item) => (

        <StatCard
          key={item.title}
          title={item.title}
          value={String(item.value)}
          change={item.change}
          description={item.description}
          icon={item.icon}
          trend={item.trend}
        />

      ))}
    </section>
  );
}

export default DashboardStats;