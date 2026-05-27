import EventCard from "./EventCard";

function CalendarSidebar() {
  return (
    <aside
      className="
        space-y-5
      "
    >
      <div
        className="
          rounded-xl
          border
          border-border
          bg-surface
          p-5
          shadow-soft
        "
      >
        <h2
          className="
            text-xl
            font-bold
          "
        >
          Upcoming Events
        </h2>

        <div className="mt-5 space-y-4">
          <EventCard
            title="Sprint Planning"
            time="09:00 AM"
            type="meeting"
          />

          <EventCard
            title="Backend Focus"
            time="01:00 PM"
            type="focus"
          />

          <EventCard
            title="AI Report Deadline"
            time="06:00 PM"
            type="deadline"
          />
        </div>
      </div>
    </aside>
  );
}

export default CalendarSidebar;