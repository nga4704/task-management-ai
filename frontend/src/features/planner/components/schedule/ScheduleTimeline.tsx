import type { PlannerTask } from "../../types/planner.types";

import {
  AlertTriangle,
  ArrowUpCircle,
  MinusCircle,
  CheckCircle2,
} from "lucide-react";

type Props = {
  plans: PlannerTask[];
};

// ==============================
// PRIORITY BADGE
// ==============================
function PriorityBadge({ value }: { value: string }) {
  switch (value) {
    case "high":
      return (
        <span className="flex items-center gap-1 rounded-full bg-red-100 text-red-700 px-3 py-1 text-xs font-semibold">
          <ArrowUpCircle size={14} />
          HIGH
        </span>
      );

    case "medium":
      return (
        <span className="flex items-center gap-1 rounded-full bg-yellow-100 text-yellow-700 px-3 py-1 text-xs font-semibold">
          <MinusCircle size={14} />
          MEDIUM
        </span>
      );

    default:
      return (
        <span className="flex items-center gap-1 rounded-full bg-green-100 text-green-700 px-3 py-1 text-xs font-semibold">
          <CheckCircle2 size={14} />
          LOW
        </span>
      );
  }
}

// ==============================
// RISK BADGE (different style!)
// ==============================
function RiskBadge({ value }: { value: string }) {
  switch (value) {
    case "high":
      return (
        <span className="flex items-center gap-1 rounded-full bg-red-500 text-white px-3 py-1 text-xs font-semibold">
          <AlertTriangle size={14} />
          RISK HIGH
        </span>
      );

    case "medium":
      return (
        <span className="flex items-center gap-1 rounded-full bg-orange-200 text-orange-800 px-3 py-1 text-xs font-semibold">
          ⚠ MEDIUM RISK
        </span>
      );

    default:
      return (
        <span className="flex items-center gap-1 rounded-full bg-green-200 text-green-800 px-3 py-1 text-xs font-semibold">
          ✓ LOW RISK
        </span>
      );
  }
}

// ==============================
// MAIN COMPONENT
// ==============================
function ScheduleTimeline({ plans }: Props) {
  return (
    <section className="rounded-3xl border border-border bg-surface p-6">
      <h2 className="text-xl font-bold">AI Schedule Timeline</h2>

      <p className="mt-2 text-sm text-muted">
        Optimized using Dependency + Priority + Workload Scheduling
      </p>

      <div className="mt-8 space-y-8">
        {plans.map((task, index) => (
          <div key={task.id} className="flex gap-5">
            {/* Timeline dot */}
            <div className="flex flex-col items-center">
              <div className="h-3 w-3 rounded-full bg-primary" />

              {index !== plans.length - 1 && (
                <div className="mt-2 w-[2px] flex-1 bg-border" />
              )}
            </div>

            {/* Card */}
            <div className="flex-1 rounded-2xl border border-border p-5">
              {/* TITLE + BADGES */}
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{task.title}</h3>

                <div className="flex gap-2">
                  {/* PRIORITY */}
                  <PriorityBadge value={task.priority} />

                  {/* RISK */}
                  <RiskBadge value={task.risk} />
                </div>
              </div>

              {/* DETAILS */}
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted">Start</p>
                  <p>{task.startDateLabel}</p>
                </div>

                <div>
                  <p className="text-muted">End</p>
                  <p>{task.endDateLabel}</p>
                </div>

                <div>
                  <p className="text-muted">Duration</p>
                  <p>{task.durationHours} h</p>
                </div>

                <div>
                  <p className="text-muted">Allocated</p>
                  <p>{task.allocatedHours} h/day</p>
                </div>
              </div>

              {/* DEPENDENCIES */}
              <div className="mt-4">
                <p className="text-sm text-muted">Dependencies</p>
                <p className="text-sm">
                  {task.dependsOn.length > 0
                    ? task.dependsOn.join(", ")
                    : "None"}
                </p>
              </div>

              {/* AI NOTE */}
              {task.aiNote && (
                <div className="mt-4 rounded-xl bg-primaryLight p-3">
                  <p className="text-xs font-semibold">
                    AI Recommendation
                  </p>
                  <p className="mt-1 text-sm">{task.aiNote}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ScheduleTimeline;