import type { GeneratedTask } from "../../types/planner.types";

type Props = {
  plans: GeneratedTask[];
};

function TaskBreakdown({ plans }: Props) {
  return (
    <section className="rounded-xl border border-border bg-surface p-6">

      <h2 className="text-xl font-bold">Task Breakdown</h2>

      <div className="mt-4 space-y-3">

        {plans.map(task => (
          <div
            key={task.id}
            className="flex items-center justify-between border border-border rounded-lg p-4"
          >
            <div>
              <p className="font-medium">{task.title}</p>
              <p className="text-sm text-muted">{task.duration}</p>
            </div>

            <span className="text-sm font-medium">
              {task.priority}
            </span>
          </div>
        ))}

      </div>

    </section>
  );
}

export default TaskBreakdown;