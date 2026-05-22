import {
  Calendar,
  dateFnsLocalizer,
} from "react-big-calendar";

import "react-big-calendar/lib/css/react-big-calendar.css";

import {
  format,
  parse,
  startOfWeek,
  getDay,
} from "date-fns";

import {enUS} from "date-fns/locale/en-US";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Sprint Planning",
    start: new Date(2026, 4, 21, 10, 0),
    end: new Date(2026, 4, 21, 11, 0),
  },

  {
    title: "AI Meeting",
    start: new Date(2026, 4, 22, 14, 0),
    end: new Date(2026, 4, 22, 15, 0),
  },
];

function CalendarSection() {
  return (
    <div
      className="
        bg-white
        rounded-[28px]
        p-6
        shadow-soft
      "
    >
      <h2 className="text-2xl font-bold mb-6">
        Calendar
      </h2>

      <div className="h-[600px]">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
        />
      </div>
    </div>
  );
}

export default CalendarSection;