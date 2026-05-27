// src/features/dashboard/components/TaskCard.tsx

import {
  priorityStyles,
  statusLabel,
  statusStyles,
} from "@/shared/constants/task";

import type {
  Task,
} from "@/shared/types/task.types";

type Props = Task;

function TaskCard({
  title,
  priority,
  status,
  progress,
  dueDate,
}: Props) {
  return (
    <div
      className="
        rounded-xl
        border
        border-border
        bg-surface
        p-5
      "
    >
      <div className="flex items-start justify-between">

        <div>
          {/* BADGES */}
          <div className="flex items-center gap-2">

            <span
              className={`
                rounded-full
                px-2
                py-1
                text-xs
                font-medium

                ${priorityStyles[priority]}
              `}
            >
              {priority}
            </span>

            <span
              className={`
                rounded-full
                px-2
                py-1
                text-xs
                font-medium

                ${statusStyles[status]}
              `}
            >
              {statusLabel[status]}
            </span>
          </div>

          {/* TITLE */}
          <h3
            className="
              mt-4
              text-lg
              font-semibold
            "
          >
            {title}
          </h3>

          {/* SUBTITLE */}
          <p
            className="
              mt-2
              text-sm
              text-muted
            "
          >
            AI Productivity Platform
          </p>
        </div>
      </div>

      {/* PROGRESS */}
      <div className="mt-6">

        <div
          className="
            mb-2
            flex
            items-center
            justify-between
            text-sm
          "
        >
          <span className="text-muted">
            Progress
          </span>

          <span className="font-medium">
            {progress}%
          </span>
        </div>

        <div
          className="
            h-2
            overflow-hidden
            rounded-full
            bg-surfaceSecondary
          "
        >
          <div
            className="
              h-full
              rounded-full
              bg-primary
            "
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>

      {/* FOOTER */}
      <div
        className="
          mt-5
          flex
          items-center
          justify-between
        "
      >
        <p className="text-sm text-muted">
          Due: {dueDate}
        </p>

        <button
          className="
            text-sm
            font-medium
            text-secondary
          "
        >
          Open
        </button>
      </div>
    </div>
  );
}

export default TaskCard;