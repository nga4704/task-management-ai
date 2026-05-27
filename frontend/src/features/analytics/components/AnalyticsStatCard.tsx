import type { ReactNode } from "react";

type AnalyticsStatCardProps = {
  title: string;

  value: string;

  description: string;

  icon: ReactNode;
};

function AnalyticsStatCard({
  title,
  value,
  description,
  icon,
}: AnalyticsStatCardProps) {
  return (
    <div
      className="
        rounded-xl
        border
        border-border
        bg-white/70
        p-6
        shadow-soft
        backdrop-blur-md
      "
    >
      <div className="flex items-start justify-between">

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

          <p
            className="
              mt-3
              text-sm
              text-muted
            "
          >
            {description}
          </p>
        </div>

        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-primaryLight
          "
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

export default AnalyticsStatCard;