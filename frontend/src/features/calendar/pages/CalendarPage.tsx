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

import  {enUS} from "date-fns/locale/en-US";

import MainLayout from "../../../app/layouts/MainLayout";

import CalendarHeader from "../components/CalendarHeader";
import CalendarStats from "../components/CalendarStats";
import CalendarSidebar from "../components/CalendarSidebar";
import CustomToolbar from "../components/CustomToolbar";

import { calendarEvents } from "../data/calendar.data";

import "../styles/calendar.css";

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

function CalendarPage() {
  return (
    <MainLayout
      title="Calendar"
      description="AI-powered team scheduling"
    >
      <div className="space-y-6">

        <CalendarHeader />

        <CalendarStats />

        <section
          className="
            grid
            grid-cols-12
            gap-6
          "
        >
          {/* CALENDAR */}
          <div
            className="
              col-span-12
              xl:col-span-8
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
              <Calendar
                localizer={localizer}
                events={calendarEvents}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 750 }}
                className="modern-calendar"
                components={{
                  toolbar: CustomToolbar,
                }}
              />
            </div>
          </div>

          {/* SIDEBAR */}
          <div
            className="
              col-span-12
              xl:col-span-4
            "
          >
            <CalendarSidebar />
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

export default CalendarPage;