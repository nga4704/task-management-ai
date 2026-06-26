import {
  Calendar,
  CheckCircle2,
} from "lucide-react";

import {
  statusLabel,
  statusStyles,
} from "@/shared/constants/task";

import type {
  OverviewTask,
} from "../../types/project-overview.types";

type Props = {
  tasks: OverviewTask[];
};

function RecentTasks({
  tasks,
}: Props) {
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
            Recent Tasks
          </h3>

          <p className="text-sm text-muted">
            Latest project updates
          </p>
        </div>

      </div>

      <div className="mt-6 space-y-4">

        {tasks.length === 0 && (
          <p className="text-sm text-muted">
            No recent tasks.
          </p>
        )}

        {tasks.map((task) => (
          <div
            key={task.id}
            className="
              rounded-2xl
              border
              border-border
              p-4
              transition-all
              hover:border-primary/30
              hover:shadow-soft
            "
          >
            <div className="flex items-start justify-between">

              <div className="min-w-0">

                <p className="truncate font-semibold">
                  {task.title}
                </p>

                <div className="mt-2 flex items-center gap-2">

                  <span
                    className={`
                      rounded-full
                      px-2.5
                      py-1
                      text-[11px]
                      font-semibold
                      ${statusStyles[task.status]}
                    `}
                  >
                    {statusLabel[task.status]}
                  </span>

                  {task.deadline && (
                    <span className="flex items-center gap-1 text-xs text-muted">
                      <Calendar size={12} />
                      {new Date(task.deadline).toLocaleDateString()}
                    </span>
                  )}

                </div>

              </div>

              <CheckCircle2
                size={18}
                className={
                  task.status === "DONE"
                    ? "text-success"
                    : "text-muted"
                }
              />

            </div>

            <div className="mt-4">

              <div className="mb-2 flex justify-between text-xs">

                <span className="text-muted">
                  Progress
                </span>

                <span className="font-semibold">
                  {task.progress}%
                </span>

              </div>

              <div className="h-2 rounded-full bg-surfaceSecondary">

                <div
                  className="
                    h-2
                    rounded-full
                    bg-primary
                    transition-all
                  "
                  style={{
                    width: `${task.progress}%`,
                  }}
                />

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default RecentTasks;