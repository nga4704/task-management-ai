function ProjectProgressChart() {
  const sprints = [
    32,
    45,
    58,
    63,
    72,
  ];

  return (
    <div
      className="
        rounded-[32px]
        border
        border-border
        bg-surface
        p-6
        shadow-soft
      "
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold">
            Sprint Progress
          </h3>

          <p className="text-sm text-muted">
            Completion trend over time
          </p>
        </div>

        <span
          className="
            rounded-full
            bg-successLight
            px-3
            py-1
            text-sm
            font-semibold
            text-success
          "
        >
          On Track
        </span>
      </div>

      <div
        className="
          mt-10
          flex
          h-[260px]
          items-end
          justify-between
          gap-4
        "
      >
        {sprints.map((value, index) => (
          <div
            key={index}
            className="flex-1"
          >
            <div
              style={{
                height: `${value}%`,
              }}
              className="
                rounded-t-xl
                bg-primary
              "
            />

            <p
              className="
                mt-3
                text-center
                text-xs
                text-muted
              "
            >
              S{index + 1}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectProgressChart;