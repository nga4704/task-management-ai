import MonthView from "../calendar/MonthView";
import WeekView from "../calendar/WeekView";

function CalendarTab() {
  return (
    <div className="space-y-6">
      <MonthView />

      <WeekView />
    </div>
  );
}

export default CalendarTab;