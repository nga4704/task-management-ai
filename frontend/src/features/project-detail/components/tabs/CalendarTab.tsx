import MonthView from "../calendar/MonthView";
import WeekView from "../calendar/WeekView";
import UpcomingEventsPanel from "../calendar/UpcomingEventsPanel";

import { useProjectTasks } from "@/features/projects/hooks/useProjectTasks";

type Props = {
  projectId: string;
};

function CalendarTab({ projectId }: Props) {
  const { data: tasks = [], isLoading } = useProjectTasks(projectId);

  if (isLoading) {
    return (
      <div className="rounded-[32px] border border-border bg-surface p-10 text-center text-muted">
        Loading calendar...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* MONTH */}
      <MonthView tasks={tasks} />

      {/* WEEK + UPCOMING */}
      <section className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        <div className="xl:col-span-8">
          <WeekView tasks={tasks} />
        </div>

        <div className="xl:col-span-4">
          <UpcomingEventsPanel tasks={tasks} />
        </div>
      </section>
    </div>
  );
}

export default CalendarTab;