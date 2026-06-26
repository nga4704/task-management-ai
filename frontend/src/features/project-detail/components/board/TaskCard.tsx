import {
  Calendar,
  Clock3,
  User,
} from "lucide-react";

import { useDraggable } from "@dnd-kit/core";

import type {
  Task,
} from "@/features/tasks/types/task.types";

import {
  priorityStyles,
} from "@/shared/constants/task";

type Props = {
  task: Task;
  onClick: () => void;
};

function TaskCard({
  task,
  onClick,
}: Props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
  } = useDraggable({
    id: task.id,
  });

  const progress =
    task.progress ?? 0;

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
        group
        w-full
        rounded-3xl
        border
        border-border
        bg-surface
        p-5
        text-left
        transition-all
        duration-200
        hover:-translate-y-1
        hover:border-primary/30
        hover:shadow-card
      "
    >
      {/* Header */}
      <div className="flex items-start justify-between">

        <span
          className={`
            rounded-full
            px-3
            py-1
            text-[11px]
            font-semibold
            capitalize
            ${priorityStyles[task.priority]}
          `}
        >
          {task.priority}
        </span>

        {/* <span className="text-xs font-medium text-muted">
          {progress}%
        </span> */}

      </div>

      {/* Title */}
      <h3
        className="
          mt-4
          line-clamp-2
          text-[15px]
          font-semibold
          text-text
          transition-colors
          group-hover:text-primary
        "
      >
        {task.title}
      </h3>

      {/* Description */}
      {task.description && (
        <p
          className="
            mt-2
            line-clamp-3
            text-sm
            leading-6
            text-muted
          "
        >
          {task.description}
        </p>
      )}

      {/* Progress */}
      <div className="mt-5">

        <div className="mb-2 flex justify-between text-xs">

          <span className="text-muted">
            Progress
          </span>

          <span className="font-semibold">
            {progress}%
          </span>

        </div>

        <div className="h-2 rounded-full bg-surfaceSecondary">

          <div
            className="
              h-2
              rounded-full
              bg-primary
              transition-all
              duration-500
            "
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

      {/* Footer */}
      <div
        className="
          mt-5
          flex
          items-center
          justify-between
        "
      >
        <div className="space-y-1">

          <div
            className="
              flex
              items-center
              gap-2
              text-xs
              text-muted
            "
          >
            <Calendar size={13} />

            {task.deadline
              ? new Date(
                  task.deadline
                ).toLocaleDateString()
              : "No deadline"}
          </div>

          <div
            className="
              flex
              items-center
              gap-2
              text-xs
              text-muted
            "
          >
            <Clock3 size={13} />

            {progress === 100
              ? "Completed"
              : progress >= 60
              ? "On Track"
              : progress >= 30
              ? "In Progress"
              : "Just Started"}
          </div>

        </div>

        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-2xl
            bg-primaryLight
            font-semibold
            text-black
          "
        >
          {task.assignee?.full_name
            ? task.assignee.full_name
                .split(" ")
                .map((v) => v[0])
                .slice(0, 2)
                .join("")
            : <User size={16} />}
        </div>

      </div>
    </button>
  );
}

export default TaskCard;