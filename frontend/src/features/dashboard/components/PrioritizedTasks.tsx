import TaskCard from "./TaskCard";

import type {
  Task,
} from "@/features/tasks/types/task.types";

type Props = {
  tasks: Task[];
};

function PrioritizedTasks({
  tasks,
}: Props) {
  return (
    <section
      className="
        rounded-xl
        border
        border-border
        bg-surface
        p-6
        shadow-soft
      "
    >
      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold">
            Prioritized Tasks
          </h2>

          <p className="mt-1 text-muted">
            Highest priority work in your team
          </p>
        </div>

        <span
          className="
            rounded-full
            bg-primaryLight
            px-3
            py-1
            text-sm
            font-semibold
          "
        >
          {tasks.length} Tasks
        </span>
      </div>

      <div
        className="
    mt-6
    max-h-[650px]
    space-y-5
    overflow-y-auto
    pr-2
  "
      >

        {tasks.length === 0 && (
          <div
            className="
        rounded-xl
        border
        border-dashed
        border-border
        py-12
        text-center
        text-muted
      "
          >
            No tasks available.
          </div>
        )}

        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            {...task}
          />
        ))}

      </div>
    </section>
  );
}

export default PrioritizedTasks;