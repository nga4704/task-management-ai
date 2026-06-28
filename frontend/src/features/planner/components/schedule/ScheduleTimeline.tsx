import type { PlannerTask } from "../../types/planner.types";

type Props = {
  plans: PlannerTask[];
};

function ScheduleTimeline({ plans }: Props) {
  return (
    <section className="rounded-xl border border-border bg-surface p-6">
      <h2 className="text-xl font-bold">AI Schedule Timeline</h2>

      <p className="text-sm text-muted mt-1">
        Optimized using Priority + Deadline + Workload
      </p>

      <div className="mt-6 space-y-4">
        {plans.map((task, index) => (
          <div key={task.id} className="flex gap-4">

            {/* DOT */}
            <div className="flex flex-col items-center">
              <div className="h-3 w-3 rounded-full bg-primary" />
              {index !== plans.length - 1 && (
                <div className="w-[2px] flex-1 bg-border mt-2" />
              )}
            </div>

            {/* CONTENT */}
            <div className="pb-6 flex-1">
              <h3 className="font-semibold">{task.title}</h3>

              <p className="text-sm text-muted mt-1">
                Priority: {task.priority}
              </p>

              <p className="text-sm text-muted">
                Estimated: {task.durationHours}h
              </p>

              <p className="text-xs text-muted mt-1">
                AI: {task.aiNote}
              </p>

              <p className="text-xs text-muted mt-2">
                {task.startDateLabel} → {task.endDateLabel}
              </p>

              <p className="text-xs text-muted">
                Allocated: {task.allocatedHours}h
              </p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default ScheduleTimeline;