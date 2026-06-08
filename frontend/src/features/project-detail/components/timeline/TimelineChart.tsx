import TaskDurationBar from "./TaskDurationBar";

const timelineTasks = [
  {
    task: "Dashboard UI",
    start: "Aug 01",
    end: "Aug 14",
    width: 35,
    offset: 0,
  },

  {
    task: "Backend API",
    start: "Aug 10",
    end: "Sep 05",
    width: 45,
    offset: 20,
  },

  {
    task: "AI Prediction",
    start: "Aug 22",
    end: "Sep 25",
    width: 55,
    offset: 35,
  },

  {
    task: "Analytics",
    start: "Sep 15",
    end: "Oct 01",
    width: 25,
    offset: 60,
  },
];

function TimelineChart() {
  return (
    <section
      className="
        rounded-[32px]
        border
        border-border
        bg-surface
        p-6
        shadow-soft
      "
    >
      <div className="mb-8">

        <h3
          className="
            text-xl
            font-bold
          "
        >
          Project Roadmap
        </h3>

        <p
          className="
            mt-2
            text-sm
            text-muted
          "
        >
          Project schedule and sprint timeline
        </p>
      </div>

      {/* MONTHS */}
      <div
        className="
          grid
          grid-cols-[220px_1fr]
          gap-4
          mb-4
        "
      >
        <div />

        <div
          className="
            grid
            grid-cols-3
            text-sm
            font-semibold
          "
        >
          <div>August</div>
          <div>September</div>
          <div>October</div>
        </div>
      </div>

      <div className="space-y-5">
        {timelineTasks.map((task) => (
          <TaskDurationBar
            key={task.task}
            {...task}
          />
        ))}
      </div>
    </section>
  );
}

export default TimelineChart;