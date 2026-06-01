import TaskDurationBar from "./TaskDurationBar";

function TimelineChart() {
  return (
    <div
      className="
        rounded-3xl
        border
        border-border
        bg-white
        p-6
        shadow-soft
      "
    >
      <div className="space-y-5">
        <TaskDurationBar
          task="Dashboard"
          width={70}
        />

        <TaskDurationBar
          task="Backend API"
          width={55}
        />

        <TaskDurationBar
          task="AI Planner"
          width={85}
        />
      </div>
    </div>
  );
}

export default TimelineChart;