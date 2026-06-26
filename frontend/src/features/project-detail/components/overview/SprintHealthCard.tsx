import {
  CheckCircle2,
  AlertTriangle,
  Loader2,
  ListTodo,
} from "lucide-react";

import type {
  ProjectStatisticsData,
} from "../../types/project-overview.types";

type Props = {
  statistics: ProjectStatisticsData;
};

function SprintHealthCard({
  statistics,
}: Props) {
  const completionRate =
    statistics.totalTasks === 0
      ? 0
      : Math.round(
          (statistics.completedTasks /
            statistics.totalTasks) *
            100
        );

  const health =
    completionRate >= 80 &&
    statistics.overdueTasks === 0
      ? "Excellent"
      : completionRate >= 60
      ? "Healthy"
      : "Needs Attention";

  return (
    <div
      className="
        rounded-[32px]
        border
        border-border
        bg-surface
        p-6
        shadow-soft
      "
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold">
            Sprint Health
          </h3>

          <p className="text-sm text-muted">
            Current sprint summary
          </p>
        </div>

        <span
          className={`
            rounded-full
            px-3
            py-1
            text-xs
            font-semibold

            ${
              completionRate >= 80
                ? "bg-successLight text-success"
                : completionRate >= 60
                ? "bg-warningLight text-warning"
                : "bg-dangerLight text-danger"
            }
          `}
        >
          {health}
        </span>
      </div>

      <div className="mt-6 space-y-5">

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CheckCircle2
              size={18}
              className="text-success"
            />

            <span>Completed</span>
          </div>

          <strong>
            {statistics.completedTasks}
          </strong>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Loader2
              size={18}
              className="text-primary"
            />

            <span>In Progress</span>
          </div>

          <strong>
            {statistics.inProgressTasks}
          </strong>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ListTodo
              size={18}
              className="text-muted"
            />

            <span>Todo</span>
          </div>

          <strong>
            {statistics.todoTasks}
          </strong>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <AlertTriangle
              size={18}
              className="text-danger"
            />

            <span>Overdue</span>
          </div>

          <strong>
            {statistics.overdueTasks}
          </strong>
        </div>

      </div>

      <div className="mt-8">
        <div className="mb-2 flex justify-between text-sm">
          <span>Completion</span>

          <span>{completionRate}%</span>
        </div>

        <div className="h-3 rounded-full bg-surfaceSecondary">
          <div
            className="
              h-3
              rounded-full
              bg-primary
              transition-all
            "
            style={{
              width: `${completionRate}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default SprintHealthCard;