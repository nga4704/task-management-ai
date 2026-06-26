import type { GeneratedTask } from "../../types/planner.types";

type Props = {
  plans: GeneratedTask[];
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

            {/* timeline dot */}
            <div className="flex flex-col items-center">
              <div className="h-3 w-3 rounded-full bg-primary" />
              {index !== plans.length - 1 && (
                <div className="w-[2px] flex-1 bg-border mt-2" />
              )}
            </div>

            {/* content */}
            <div className="pb-6">
              <h3 className="font-semibold">
                {task.title}
              </h3>

              <p className="text-sm text-muted mt-1">
                Priority: {task.priority}
              </p>

              <p className="text-sm text-muted">
                Estimated: {task.duration}
              </p>

              <p className="text-xs text-muted mt-1">
                AI: {task.aiNote}
              </p>
            </div>
            <div>
              Day {task.startDay} → Day {task.endDay}
            </div>
            <div>
              {task.allocatedHours}h
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default ScheduleTimeline;