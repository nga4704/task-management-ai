import { useMemo } from "react";

import {
  AlertTriangle,
  CalendarClock,
  Flag,
} from "lucide-react";

import type { Task } from "@/features/tasks/types/task.types";

type Props = {
  tasks: Task[];
};

function UpcomingEventsPanel({ tasks }: Props) {
  const upcomingUrgent = useMemo(() => {
    const now = new Date();

    return tasks
      .filter((task) => {
        if (!task.deadline) return false;

        const deadline = new Date(task.deadline);
        const diffHours =
          (deadline.getTime() - now.getTime()) /
          (1000 * 60 * 60);

        // chỉ lấy task trong 48h tới
        return diffHours >= 0 && diffHours <= 48;
      })
      .sort(
        (a, b) =>
          new Date(a.deadline!).getTime() -
          new Date(b.deadline!).getTime()
      )
      .slice(0, 5);
  }, [tasks]);

  const getIcon = (status: string) => {
    switch (status) {
      case "DONE":
        return Flag;
      case "REVIEW":
        return AlertTriangle;
      default:
        return CalendarClock;
    }
  };

  return (
    <div className="rounded-[32px] border border-border bg-surface p-6 shadow-soft">
      <h3 className="text-lg font-bold">
        Urgent Deadlines (48h)
      </h3>

      <div className="mt-6 space-y-4">
        {upcomingUrgent.length === 0 ? (
          <div className="py-6 text-center text-muted">
            No urgent tasks.
          </div>
        ) : (
          upcomingUrgent.map((task) => {
            const Icon = getIcon(task.status);

            return (
              <div
                key={task.id}
                className="flex items-center gap-4 rounded-2xl border border-border p-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primaryLight">
                  <Icon size={20} />
                </div>

                <div className="min-w-0 flex-1">
                  <h4 className="truncate font-semibold">
                    {task.title}
                  </h4>

                  <p className="text-sm text-muted">
                    Due:{" "}
                    {new Date(task.deadline!).toLocaleString()}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default UpcomingEventsPanel;