import type {
  TeamPerformance,
} from "../types/analytics.types";

type TeamPerformanceCardProps = {
  item: TeamPerformance;
};

function TeamPerformanceCard({
  item,
}: TeamPerformanceCardProps) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-border
        bg-surface
        p-5
      "
    >
      <div className="flex items-start justify-between">

        <div>
          <h3 className="text-lg font-bold">
            {item.team}
          </h3>

          <p className="mt-1 text-sm text-muted">
            {item.completedTasks} tasks completed
          </p>
        </div>

        <div
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
          AI {item.aiScore}%
        </div>
      </div>

      <div className="mt-5">

        <div
          className="
            mb-2
            flex
            justify-between
            text-sm
          "
        >
          <span className="text-muted">
            Productivity
          </span>

          <span className="font-medium">
            {item.productivity}%
          </span>
        </div>

        <div
          className="
            h-2
            overflow-hidden
            rounded-full
            bg-surfaceSecondary
          "
        >
          <div
            style={{
              width: `${item.productivity}%`,
            }}
            className="
              h-full
              rounded-full
              bg-primary
            "
          />
        </div>
      </div>
    </div>
  );
}

export default TeamPerformanceCard;