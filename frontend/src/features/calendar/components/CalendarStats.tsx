// features/calendar/components/CalendarStats.tsx

import StatCard from "@/shared/components/cards/StatCard";

import { mockCalendarStats } from "../data/mockCalendarStats";

function CalendarStats() {
  return (
    <section
      className="
        grid
        grid-cols-1
        gap-5

        sm:grid-cols-2
        xl:grid-cols-4
      "
    >
      {mockCalendarStats.map((stat) => (
        <StatCard
          key={stat.title}
          {...stat}
        />
      ))}
    </section>
  );
}

export default CalendarStats;