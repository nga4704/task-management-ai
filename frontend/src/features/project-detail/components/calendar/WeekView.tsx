import { useMemo, useState } from "react";

import EventCard from "./EventCard";

import type { Task } from "@/features/tasks/types/task.types";
import TaskDetailDrawer from "../drawer/TaskDetailDrawer";

type Props = {
  tasks: Task[];
};

function WeekView({
  tasks,
}: Props) {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const events = useMemo(() => {
    const today = new Date();

    const end = new Date();
    end.setDate(today.getDate() + 7);

    return tasks
      .filter((task) => {
        if (!task.deadline) return false;

        const deadline = new Date(task.deadline);

        return (
          deadline >= today &&
          deadline <= end
        );
      })
      .sort(
        (a, b) =>
          new Date(a.deadline!).getTime() -
          new Date(b.deadline!).getTime()
      );
  }, [tasks]);

  return (
    <section
      className="
        rounded-[32px]
        border
        border-border
        bg-surface
        p-6
        shadow-soft
      "
    >
      <div
        className="
          mb-6
          flex
          items-center
          justify-between
        "
      >
        <div>
          <h3
            className="
              text-xl
              font-bold
            "
          >
            Weekly Schedule
          </h3>

          <p className="text-sm text-muted">
            Meetings, deadlines and milestones
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {events.length === 0 ? (
          <div className="py-8 text-center text-muted">
            No upcoming tasks this week.
          </div>
        ) : (
          events.map((task) => (
            <div key={task.id} onClick={() => setSelectedTask(task)}>
              <EventCard task={task} />
            </div>
          ))
        )}
      </div>
      <TaskDetailDrawer
        taskId={selectedTask?.id}
        onClose={() => setSelectedTask(null)}
      />
    </section>
  );
}

export default WeekView;