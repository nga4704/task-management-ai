import TaskStatCard from "./TaskStatCard";

function TaskStats() {
  return (
    <section
      className="
        grid
        grid-cols-1
        gap-6
        md:grid-cols-2
        xl:grid-cols-4
      "
    >
      <TaskStatCard
        title="Total Tasks"
        value="24"
      />

      <TaskStatCard
        title="In Progress"
        value="8"
      />

      <TaskStatCard
        title="AI Productivity"
        value="91%"
      />

      <TaskStatCard
        title="Focus Hours"
        value="36h"
      />
    </section>
  );
}

export default TaskStats;