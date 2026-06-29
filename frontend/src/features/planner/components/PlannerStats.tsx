import {
  CheckCircle2,
  CalendarDays,
  ShieldAlert,
  Gauge,
} from "lucide-react";

import type {
  PlannerSummary,
} from "../types/planner.types";

type Props = {
  summary: PlannerSummary | null;
  taskCount: number;
};

function PlannerStats({
  summary,
  taskCount,
}: Props) {
  const stats = [
    {
      title: "Tasks",
      value: taskCount,
      icon: CheckCircle2,
    },
    {
      title: "Estimated Days",
      value: summary?.estimatedDays ?? "-",
      icon: CalendarDays,
    },
    {
      title: "Risk",
      value: summary?.riskLevel ?? "-",
      icon: ShieldAlert,
    },
    {
      title: "Productivity",
      value: `${summary?.productivityScore ?? 0}%`,
      icon: Gauge,
    },
  ];

  return (
    <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

      {stats.map((item) => {

        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="
              rounded-3xl
              border
              border-border
              bg-surface
              p-6
            "
          >
            <div className="flex items-center justify-between">

              <p className="text-sm text-muted">
                {item.title}
              </p>

              <Icon
                size={18}
                className="text-primary"
              />

            </div>

            <div className="mt-4 text-3xl font-bold">
              {item.value}
            </div>

          </div>
        );

      })}

    </section>
  );
}

export default PlannerStats;