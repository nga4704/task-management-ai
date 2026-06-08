import MonthView from "../calendar/MonthView";
import WeekView from "../calendar/WeekView";
import UpcomingEventsPanel from "../calendar/UpcomingEventsPanel.tsx";

function CalendarTab() {
  return (
    <div className="space-y-6">

      <section
        className="
          grid
          gap-6
          xl:grid-cols-12
        "
      >
        <div className="xl:col-span-8">
          <MonthView />
        </div>

        <div className="xl:col-span-4">
          <UpcomingEventsPanel />
        </div>
      </section>

      <WeekView />
    </div>
  );
}

export default CalendarTab;