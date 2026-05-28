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
        overflow-hidden

        rounded-[28px]

        border

        backdrop-blur-md

        p-5
        md:p-6

        transition-all
        duration-300

        hover:-translate-y-1

        ${
          highlighted
            ? `
              border-primary/40
              bg-primaryLight
              shadow-card
            `
            : `
              border-white/50
              bg-white/70
              shadow-soft
              hover:shadow-card
            `
        }
      `}
    >
      {/* GLOW */}
      {/* <div
        className={`
          absolute
          right-[-50px]
          top-[-50px]

          h-[150px]
          w-[150px]

          rounded-full

          blur-3xl

          transition-all
          duration-500

          ${
            highlighted
              ? "bg-primary/20"
              : "bg-primary/10"
          }
        `}
      /> */}

      <div className="relative z-10">
        {/* HEADER */}
        <div className="flex items-start justify-between gap-4">

          <div className="min-w-0">

            <p
              className="
                text-sm
                font-medium
                text-muted
              "
            >
              {title}
            </p>

            <h2
              className="
                mt-3

                truncate

                text-3xl
                md:text-4xl

                font-bold
                tracking-tight
              "
            >
              {value}
            </h2>
          </div>

          {Icon && (
            <div
              className={`
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center

                rounded-2xl

                transition-all
                duration-300

                ${
                  highlighted
                    ? `
                      bg-black
                      text-white
                      shadow-soft
                    `
                    : `
                      bg-primaryLight
                      text-black
                    `
                }
              `}
            >
              <Icon size={22} />
            </div>
          )}
        </div>

        {/* FOOTER */}
        {(change || description) && (
          <div
            className="
              mt-6
              flex
              items-center
              justify-between
              gap-3
            "
          >
            {change && (
              <span
                className={`
                  rounded-full

                  px-3
                  py-1

                  text-xs
                  font-semibold

                  ${
                    trend === "positive"
                      ? `
                        bg-successLight
                        text-success
                      `
                      : trend === "negative"
                      ? `
                        bg-dangerLight
                        text-danger
                      `
                      : `
                        bg-surfaceSecondary
                        text-muted
                      `
                  }
                `}
              >
                {change}
              </span>
            )}

            {description && (
              <p
                className="
                  truncate
                  text-xs
                  text-muted
                "
              >
                {description}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default StatCard;