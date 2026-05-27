import {
  Plus,
  Sparkles,
} from "lucide-react";

function CalendarHeader() {
  return (
    <section
      className="
        rounded-xl
        border
        border-border
        bg-surface
        p-7
        shadow-soft
      "
    >
      <div
        className="
          flex
          flex-col
          gap-6
          xl:flex-row
          xl:items-center
          xl:justify-between
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
              px-4
              py-2
              text-sm
              font-medium
            "
          >
            <Sparkles size={16} />

            AI Smart Scheduling
          </div>

          <h1
            className="
              mt-5
              text-4xl
              font-bold
            "
          >
            Team Calendar
          </h1>

          <p className="mt-3 text-muted text-lg">
            Organize meetings, focus sessions
            and AI-generated schedules.
          </p>
        </div>

        <button
          className="
            inline-flex
            items-center
            gap-2
            rounded-xl
            bg-black
            px-5
            py-3
            text-white
            font-semibold
          "
        >
          <Plus size={18} />

          Create Event
        </button>
      </div>
    </section>
  );
}

export default CalendarHeader;