import {
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
  Brain,
} from "lucide-react";

import StatCard from "@/shared/components/cards/StatCard";

import type {
  ProjectStatisticsData,
} from "../../types/project-overview.types";

import type {
  StatCardItem,
} from "@/shared/types/stat.types";

type Props = {
  statistics: ProjectStatisticsData;
};

function ProjectStatistics({
  statistics,
}: Props) {
  const stats: StatCardItem[] = [
    {
      title: "Project Progress",
      value: `${statistics.progress}%`,
      change: `${statistics.progress}%`,
      icon: TrendingUp,
      highlighted: true,
    },

    {
      title: "Completed Tasks",
      value: `${statistics.completedTasks}/${statistics.totalTasks}`,
      change: `${statistics.completedTasks} done`,
      icon: CheckCircle2,
    },

    {
      title: "Overdue Tasks",
      value: statistics.overdueTasks.toString(),
      change:
        statistics.overdueTasks === 0
          ? "Healthy"
          : `${statistics.overdueTasks} overdue`,
      icon: AlertTriangle,
      trend:
        statistics.overdueTasks === 0
          ? "positive"
          : "negative",
    },

    {
      title: "AI Health Score",
      value: `${statistics.aiHealthScore}%`,
      change:
        statistics.aiHealthScore >= 80
          ? "Excellent"
          : statistics.aiHealthScore >= 60
            ? "Good"
            : "Needs Attention",
      icon: Brain,
      highlighted: true,
    },
  ];

  return (
    <section
      className="
        grid
        gap-5
        sm:grid-cols-2
        xl:grid-cols-4
      "
    >
      {stats.map((item) => (
        <StatCard
          key={item.title}
          {...item}
        />
      ))}
    </section>
  );
}

export default ProjectStatistics;