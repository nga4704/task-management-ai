import {
  AlertCircle,
  Flag,
  CalendarClock,
} from "lucide-react";

const events = [
  {
    title: "Sprint Review",
    date: "12 Aug",
    icon: CalendarClock,
  },
  {
    title: "Backend Deadline",
    date: "15 Aug",
    icon: AlertCircle,
  },
  {
    title: "Release v1.0",
    date: "30 Aug",
    icon: Flag,
  },
];

function UpcomingEventsPanel() {
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
      <h3
        className="
          text-lg
          font-bold
        "
      >
        Upcoming Events
      </h3>

      <div className="mt-6 space-y-4">
        {events.map((event) => (
          <div
            key={event.title}
            className="
              flex
              items-center
              gap-4

              rounded-2xl
              border
              border-border

              p-4
            "
          >
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center

                rounded-xl
                bg-primaryLight
              "
            >
              <event.icon size={20} />
            </div>

            <div>
              <h4 className="font-semibold">
                {event.title}
              </h4>

              <p
                className="
                  text-sm
                  text-muted
                "
              >
                {event.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingEventsPanel;