import EventCard from "./EventCard";

import { mockEvents } from "./data/mockEvents";

function WeekView() {
  return (
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
  );
}

export default WeekView;