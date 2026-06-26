// @/shared/components/cards/StatCard.tsx

import type {
  StatCardItem,
} from "@/shared/types/stat.types";

function StatCard({
  title,
  value,
  change,
  description,
  icon: Icon,
  highlighted,
  trend = "positive",
}: StatCardItem) {
  return (
    <div
      className={`
        group
        relative

        rounded-2xl
        border

        p-4

        transition-all duration-200

        ${
          highlighted
            ? "bg-primaryLight border-primary/30"
            : "bg-surface border-border hover:border-primary/30"
        }

        hover:-translate-y-0.5 hover:shadow-soft
      `}
    >
      {/* TOP */}
      <div className="flex items-start justify-between gap-3">

        <div className="min-w-0">
          <p className="text-xs font-medium text-muted">
            {title}
          </p>

          <h2 className="mt-1 text-2xl font-bold text-text truncate">
            {value}
          </h2>
        </div>

        {Icon && (
          <div
            className={`
              flex h-9 w-9 items-center justify-center
              rounded-xl

              ${
                highlighted
                  ? "bg-black text-white"
                  : "bg-primaryLight text-black"
              }
            `}
          >
            <Icon size={16} />
          </div>
        )}
      </div>

      {/* BOTTOM */}
      {(change || description) && (
        <div className="mt-3 flex items-center justify-between gap-2">

          {change && (
            <span
              className={`
                text-[11px] font-semibold px-2.5 py-1 rounded-full

                ${
                  trend === "positive"
                    ? "bg-successLight text-success"
                    : trend === "negative"
                    ? "bg-dangerLight text-danger"
                    : "bg-surfaceSecondary text-muted"
                }
              `}
            >
              {change}
            </span>
          )}

          {description && (
            <span className="text-[11px] text-muted truncate">
              {description}
            </span>
          )}

        </div>
      )}
    </div>
  );
}
export default StatCard;