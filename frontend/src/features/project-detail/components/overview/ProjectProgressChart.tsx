import type {
  ProjectStatisticsData,
} from "../../types/project-overview.types";

type Props = {
  statistics: ProjectStatisticsData;
};

function ProjectProgressChart({
  statistics,
}: Props) {
  const bars = [
    {
      label: "Todo",
      value: statistics.todoTasks,
    },
    {
      label: "Progress",
      value: statistics.inProgressTasks,
    },
    {
      label: "Review",
      value: statistics.reviewTasks,
    },
    {
      label: "Done",
      value: statistics.completedTasks,
    },
  ];

  const max =
    Math.max(...bars.map((b) => b.value), 1);

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
            Task Distribution
          </h3>

          <p className="text-sm text-muted">
            Current project progress
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
          {statistics.progress}% Complete
        </span>
      </div>

      <div
        className="
          mt-10
          flex
          h-[260px]
          items-end
          justify-between
          gap-5
        "
      >
        {bars.map((bar) => (
          <div
            key={bar.label}
            className="flex flex-1 flex-col items-center"
          >
            <span className="mb-2 text-xs font-semibold">
              {bar.value}
            </span>

            <div
              style={{
                height: `${(bar.value / max) * 100}%`,
              }}
              className="
                w-full
                rounded-t-xl
                bg-primary
                transition-all
              "
            />

            <p
              className="
                mt-3
                text-xs
                text-muted
              "
            >
              {bar.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectProgressChart;