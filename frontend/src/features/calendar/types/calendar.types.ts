export type CalendarEvent = {
  id: number;
  title: string;
  start: Date;
  end: Date;
  type: "meeting" | "focus" | "deadline";
};