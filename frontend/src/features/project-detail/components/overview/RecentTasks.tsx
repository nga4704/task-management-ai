const tasks = [
  {
    title: "Implement Dashboard",
    assignee: "John",
    priority: "High",
    status: "In Progress",
    due: "Jun 10",
  },
  {
    title: "AI Prediction Service",
    assignee: "Anna",
    priority: "Critical",
    status: "Review",
    due: "Jun 12",
  },
  {
    title: "Database Optimization",
    assignee: "David",
    priority: "Medium",
    status: "Done",
    due: "Jun 08",
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