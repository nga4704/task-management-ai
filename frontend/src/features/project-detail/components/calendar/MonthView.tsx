import {
  ChevronLeft,
  ChevronRight,
  CalendarDays,
} from "lucide-react";

const weekDays = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
];

function MonthView() {
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
      {/* HEADER */}
      <div
        className="
          flex
          items-center
          justify-between
          mb-6
        "
      >
        <div>
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-primaryLight
              px-3
              py-1
              text-xs
              font-semibold
            "
          >
            <CalendarDays size={14} />
            PROJECT CALENDAR
          </div>

          <h3
            className="
              mt-3
              text-2xl
              font-bold
            "
          >
            August 2026
          </h3>
        </div>

        <div className="flex gap-2">
          <button
            className="
              h-10
              w-10
              rounded-xl
              border
              border-border
            "
          >
            <ChevronLeft size={18} />
          </button>

          <button
            className="
              h-10
              w-10
              rounded-xl
              border
              border-border
            "
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* WEEK HEADER */}
      <div
        className="
          mb-3
          grid
          grid-cols-7
          gap-3
        "
      >
        {weekDays.map((day) => (
          <div
            key={day}
            className="
              text-center
              text-sm
              font-semibold
              text-muted
            "
          >
            {day}
          </div>
        ))}
      </div>

      {/* CALENDAR */}
      <div
        className="
          grid
          grid-cols-7
          gap-3
        "
      >
        {Array.from({ length: 35 }).map(
          (_, index) => (
            <div
              key={index}
              className="
                min-h-[110px]
                rounded-2xl
                border
                border-border
                p-3
                transition-all
                hover:border-primary
                hover:shadow-soft
              "
            >
              <div
                className="
                  text-sm
                  font-semibold
                "
              >
                {index + 1}
              </div>

              {(index === 8 ||
                index === 17 ||
                index === 23) && (
                <div
                  className="
                    mt-3
                    rounded-lg
                    bg-primaryLight
                    px-2
                    py-1
                    text-[11px]
                    font-medium
                  "
                >
                  Sprint
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default MonthView;