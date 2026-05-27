import type {
  StatItem,
} from "../../types/dashboard.types";

function StatCard({
  title,
  value,
  growth,
  icon,
}: StatItem) {
  const Icon = icon;

  return (
    <div
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
          <p className="text-sm text-muted">
            {title}
          </p>

          <h2
            className="
              mt-3
              text-4xl
              font-bold
            "
          >
            {value}
          </h2>
        </div>

        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-xl
            bg-primaryLight
          "
        >
          <Icon size={24} />
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2">

        <span
          className="
            rounded-full
            bg-successLight
            px-3
            py-1
            text-sm
            font-medium
            text-success
          "
        >
          {growth}
        </span>

        <p className="text-sm text-muted">
          vs last week
        </p>
      </div>
    </div>
  );
}

export default StatCard;