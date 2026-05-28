// features/calendar/data/mockCalendarStats.ts

import {
  CalendarCheck2,
  TimerReset,
  Clock3,
  Sparkles,
} from "lucide-react";

export const mockCalendarStats = [
  {
    title: "Meetings",
    value: "18",
    change: "+12%",
    icon: CalendarCheck2,
  },

  {
    title: "Focus Hours",
    value: "42h",
    change: "+9%",
    icon: TimerReset,
  },

  {
    title: "Deadlines",
    value: "6",
    change: "+4%",
    icon: Clock3,
  },

  {
    title: "AI Efficiency",
    value: "91%",
    change: "+15%",
    icon: Sparkles,
    highlighted: true,
  },
];