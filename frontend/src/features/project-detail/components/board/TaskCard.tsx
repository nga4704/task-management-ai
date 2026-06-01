import {
  Calendar,
  AlertTriangle,
} from "lucide-react";

import type { Task } from "../../types/task.types";

type Props = {
  task: Task;

  onClick: () => void;
};

function TaskCard({
  task,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
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
      <div className="flex justify-between">
        <span
          className="
            rounded-full
            bg-primaryLight

            px-3
            py-1

            text-xs
            font-semibold
          "
        >
          {task.priority}
        </span>

        {task.riskScore &&
          task.riskScore > 60 && (
            <AlertTriangle
              size={18}
              className="text-danger"
            />
          )}
      </div>

      <h3
        className="
          mt-4

          font-semibold
          leading-6
        "
      >
        {task.title}
      </h3>

      <div className="mt-4">
        <div
          className="
            h-2

            rounded-full

            bg-border
          "
        >
          <div
            className="
              h-full

              rounded-full

              bg-primary
            "
            style={{
              width: `${task.progress}%`,
            }}
          />
        </div>

        <p
          className="
            mt-2

            text-xs
            text-muted
          "
        >
          {task.progress}% complete
        </p>
      </div>

      <div
        className="
          mt-4

          flex
          items-center
          justify-between
        "
      >
        <div
          className="
            flex
            items-center
            gap-2

            text-xs
            text-muted
          "
        >
          <Calendar size={14} />
          {task.deadline}
        </div>

        <div
          className="
            h-9
            w-9

            rounded-xl

            bg-primary

            flex
            items-center
            justify-center

            font-bold
          "
        >
          {task.assignee[0]}
        </div>
      </div>
    </button>
  );
}

export default TaskCard;