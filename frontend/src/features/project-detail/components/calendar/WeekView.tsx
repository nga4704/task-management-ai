import EventCard from "./EventCard";
import { mockEvents } from "./data/mockEvents";

function WeekView() {
  return (
    <section
      className="
        rounded-[32px]
        border
        border-border
        bg-surface
        p-6
        shadow-soft
      "
    >
      <div
        className="
          flex
          items-center
          justify-between
          mb-6
        "
      >
        <div>
          <h3
            className="
              text-xl
              font-bold
            "
          >
            Weekly Schedule
          </h3>

          <p className="text-sm text-muted">
            Meetings, deadlines and milestones
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {mockEvents.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            time={event.time}
            type={event.type}
          />
        ))}
      </div>
    </section>
  );
}

export default WeekView;