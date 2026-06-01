const tasks = [
  {
    title: "Dashboard UI",
    status: "Done",
  },

  {
    title: "Analytics API",
    status: "In Progress",
  },

  {
    title: "AI Prediction",
    status: "Review",
  },

  {
    title: "Database Design",
    status: "Done",
  },
];

function RecentTasks() {
  return (
    <div
      className="
        rounded-[32px]

        border
        border-border

        bg-white/70

        p-6

        shadow-soft
      "
    >
      <h3
        className="
          text-lg
          font-bold
        "
      >
        Recent Tasks
      </h3>

      <div className="mt-6 space-y-4">
        {tasks.map((task) => (
          <div
            key={task.title}
            className="
              flex
              items-center
              justify-between

              rounded-2xl

              border
              border-border

              p-4
            "
          >
            <span>{task.title}</span>

            <span
              className="
                rounded-full

                bg-primaryLight

                px-3
                py-1

                text-xs
                font-semibold
              "
            >
              {task.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentTasks;