import { Calendar } from "lucide-react";
import type { Task } from "@/features/tasks/types/task.types";
import { useDraggable } from "@dnd-kit/core";

import { priorityStyles } from "@/shared/constants/task";

type Props = {
  task: Task;
  onClick: () => void;
};

function TaskCard({ task, onClick }: Props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });

  return (
    <button
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{
        transform: transform
          ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
          : undefined,
      }}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className="
        w-full
        text-left
        rounded-3xl
        border
        border-border
        bg-white
        p-4
        shadow-soft
        transition-all
        duration-200
        hover:-translate-y-1
        hover:shadow-card
      "
    >
      {/* PRIORITY */}
      <div className="flex justify-between">
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${priorityStyles[task.priority]}`}>
          {task.priority}
        </span>
      </div>

      {/* TITLE */}
      <h3 className="mt-4 font-semibold">{task.title}</h3>

      {/* DESCRIPTION */}
      {task.description && (
        <p className="mt-2 text-sm text-muted line-clamp-2">
          {task.description}
        </p>
      )}

      {/* FOOTER */}
      <div className="mt-4 flex justify-between items-center text-xs text-muted">
        <div className="flex items-center gap-2">
          <Calendar size={14} />
          {task.deadline
            ? new Date(task.deadline).toLocaleDateString()
            : "No deadline"}
        </div>

        <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-white">
          {task.assignee?.full_name?.charAt(0) || "?"}
        </div>
      </div>
    </button>
  );
}

export default TaskCard;