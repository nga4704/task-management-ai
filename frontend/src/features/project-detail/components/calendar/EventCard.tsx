import { CalendarClock, User } from "lucide-react";

import type { Task } from "@/features/tasks/types/task.types";

type Props = {
  task: Task;
};

// Normalize priority để tránh mismatch backend/frontend
const normalizePriority = (p?: string) =>
  (p ?? "LOW").toUpperCase();

const priorityColor: Record<string, string> = {
  LOW: "bg-success/10 text-success",
  MEDIUM: "bg-warning/10 text-warning",
  HIGH: "bg-danger/10 text-danger",
};

function EventCard({ task }: Props) {
  const deadline = task.deadline ? new Date(task.deadline) : null;

  const priority = normalizePriority(task.priority);

  return (
    <div
      className="
        flex
        items-center
        justify-between
        rounded-2xl
        border
        border-border
        bg-surface
        p-4
        transition-all
        hover:shadow-soft
      "
    >
      {/* LEFT */}
      <div className="flex items-center gap-4">
        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            bg-primaryLight
          "
        >
          <CalendarClock size={18} />
        </div>

        <div>
          <h4 className="font-semibold">{task.title}</h4>

          <p className="mt-1 text-sm text-muted">
            {deadline
              ? deadline.toLocaleString([], {
                  day: "2-digit",
                  month: "short",
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : "No deadline"}
          </p>

          {task.users_tasks_assignee_idTousers && (
            <div className="mt-2 flex items-center gap-2 text-xs text-muted">
              <User size={12} />
              {task.users_tasks_assignee_idTousers.full_name}
            </div>
          )}
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col items-end gap-2">
        <span
          className={`
            rounded-full
            px-3
            py-1
            text-xs
            font-semibold
            ${priorityColor[priority] ?? "bg-gray-100 text-gray-700"}
          `}
        >
          {priority}
        </span>

        <span className="text-xs text-muted">
          {task.status?.replace("_", " ")}
        </span>
      </div>
    </div>
  );
}

export default EventCard;