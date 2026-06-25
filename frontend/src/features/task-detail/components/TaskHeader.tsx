// src/features/task-detail/components/TaskHeader.tsx

import type { Task } from "@/features/tasks/types/task.types";

import {
  statusLabel,
  priorityStyles,
  statusStyles,
} from "@/shared/constants/task";

type Props = {
  task: Task;
};

function TaskHeader({
  task,
}: Props) {
  return (
    <div
      className="
        bg-white
        rounded-card
        p-6
        shadow-soft

        flex
        flex-col
        lg:flex-row

        lg:items-center
        lg:justify-between

        gap-6
      "
    >
      <div>
        <div className="flex items-center gap-3">

          <span
            className={`
              px-4
              py-1
              rounded-full
              text-sm
              font-medium

              ${statusStyles[task.status]}
            `}
          >
            {statusLabel[task.status]}
          </span>

          <span
            className={`
              px-4
              py-1
              rounded-full
              text-sm
              font-medium

              ${priorityStyles[task.priority]}
            `}
          >
            {task.priority}
          </span>

        </div>

        <h1
          className="
            text-4xl
            font-bold
            mt-5
          "
        >
          {task.title}
        </h1>

        <p
          className="
            text-gray-500
            mt-4
            max-w-2xl
            leading-relaxed
          "
        >
          {task.description ||
            "No description"}
        </p>
      </div>
    </div>
  );
}

export default TaskHeader;