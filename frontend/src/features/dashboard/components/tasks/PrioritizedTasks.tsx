import TaskCard from "./TaskCard";

import { taskData } from "../../data/mockDashboard";

function PrioritizedTasks() {
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
          <h2
            className="
              text-2xl
              font-bold
            "
          >
            AI Prioritized Tasks
          </h2>

          <p className="mt-1 text-muted">
            Smart ranking based on workload
          </p>
        </div>

        <button
          className="
            font-medium
            text-secondary
          "
        >
          View All
        </button>
      </div>

      <div className="mt-6 space-y-5">
        {taskData.map((task) => (
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