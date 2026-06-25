import type { Task } from "@/features/tasks/types/task.types";

import { Activity, Circle } from "lucide-react";

type Props = {
  task: Task;
};

function ActivityTimeline({ task }: Props) {
  const formatTime = (date?: string) => {
    if (!date) return "";
    return new Date(date).toLocaleString();
  };

  return (
    <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm">

      {/* HEADER */}
      <div className="flex items-center gap-2">
        <Activity size={18} className="text-black" />
        <h3 className="font-bold">Activity</h3>
      </div>

      {/* BODY */}
      <div className="mt-5 relative max-h-[320px] overflow-y-auto pr-2">

        <div className="space-y-5">

          {task.task_progress?.length ? (
            task.task_progress.map((item) => (
              <div
                key={item.id}
                className="
                  relative
                  flex
                  gap-3
                  pl-8
                  hover:bg-surfaceSecondary
                  rounded-xl
                  p-2
                  transition
                "
              >

                {/* DOT */}
                <div className="absolute left-0 top-3">
                  <div className="h-4 w-4 rounded-full bg-primary shadow-sm flex items-center justify-center">
                    {/* <Circle size={8} className="text-white" /> */}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="flex-1">
                  <p className="text-sm font-medium text-text">
                    <span className="text-black">
                      {item.users?.full_name}
                    </span>
                    {" • "}
                    <span className="text-muted">
                      {item.note ?? "Progress updated"}
                    </span>
                  </p>

                  <p className="text-xs text-muted mt-1">
                    {formatTime(item.created_at)}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <Activity size={28} className="text-muted mb-2" />
              <p className="text-sm text-muted">
                No activity yet
              </p>
              <p className="text-xs text-muted mt-1">
                Updates will appear here when task changes
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ActivityTimeline;