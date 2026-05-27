import {
  Clock3,
  Sparkles,
} from "lucide-react";

import type { Task } from "@/shared/types/task.types";

import { priorityStyles } from "@/shared/constants/task";

type TaskBoardCardProps = {
  task: Task;
};

function TaskBoardCard({
  task,
}: TaskBoardCardProps) {
  return (
    <article
      className="
        rounded-xl
        border
        border-border
        bg-surface
        p-5
        shadow-soft
        transition-all
        duration-200
        hover:-translate-y-1
        hover:shadow-medium
      "
    >
      {/* HEADER */}
      <div className="flex items-start justify-between gap-3">

        <div className="flex-1">

          {task.aiSuggested && (
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-infoLight
                px-3
                py-1
                text-xs
                font-medium
                text-info
              "
            >
              <Sparkles size={14} />

              AI Suggested
            </div>
          )}

          <h3
            className="
              mt-4
              text-lg
              font-semibold
              leading-relaxed
            "
          >
            {task.title}
          </h3>
        </div>

        <span
          className={`
            rounded-full
            px-3
            py-1
            text-sm
            font-medium

            ${priorityStyles[task.priority]}
          `}
        >
          {task.priority}
        </span>
      </div>

      {/* DESCRIPTION */}
      <p
        className="
          mt-4
          text-sm
          leading-7
          text-muted
        "
      >
        AI predicts this task should be completed
        before the deadline to maintain team
        productivity performance.
      </p>

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
            {task.progress}%
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
            style={{
              width: `${task.progress}%`,
            }}
            className="
              h-full
              rounded-full
              bg-primary
            "
          />
        </div>
      </div>

      {/* FOOTER */}
      <div
        className="
          mt-6
          flex
          items-center
          justify-between
        "
      >
        <div className="flex items-center gap-2">

          <Clock3
            size={16}
            className="text-muted"
          />

          <span className="text-sm text-muted">
            Due {task.dueDate}
          </span>
        </div>

        <div className="flex -space-x-2">

          <div
            className="
              h-9
              w-9
              rounded-full
              border-2
              border-white
              bg-primaryLight
            "
          />

          <div
            className="
              h-9
              w-9
              rounded-full
              border-2
              border-white
              bg-secondaryLight
            "
          />
        </div>
      </div>
    </article>
  );
}

export default TaskBoardCard;