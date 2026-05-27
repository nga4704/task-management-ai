import type { CalendarEvent } from "../types/calendar.types";

export const calendarEvents: CalendarEvent[] = [
  {
    id: 1,
    title: "AI Sprint Planning",
    start: new Date(2026, 4, 20, 9, 0),
    end: new Date(2026, 4, 20, 10, 30),
    type: "meeting",
  },

  {
    id: 2,
    title: "Backend API Focus",
    start: new Date(2026, 4, 21, 13, 0),
    end: new Date(2026, 4, 21, 16, 0),
    type: "focus",
  },

  {
    id: 3,
    title: "AI Prediction Deadline",
    start: new Date(2026, 4, 24, 18, 0),
    end: new Date(2026, 4, 24, 19, 0),
    type: "deadline",
  },
];