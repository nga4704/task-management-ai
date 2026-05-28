import {
  Clock3,
  Sparkles,
} from "lucide-react";

import type {
  GeneratedTask,
} from "../types/planner.types";

import {
  priorityStyles,
} from "../constants/plannerStyles";

type GeneratedPlanCardProps = {
  task: GeneratedTask;
};

function GeneratedPlanCard({
  task,
}: GeneratedPlanCardProps) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-border
        bg-surface
        p-5
      "
    >
      <div className="flex items-start justify-between">

        <div>

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

          <h3
            className="
              mt-4
              text-lg
              font-bold
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

            ${priorityStyles[
              task.priority
            ]}
          `}
        >
          {task.priority}
        </span>
      </div>

      <p
        className="
          mt-4
          text-sm
          leading-7
          text-muted
        "
      >
        {task.aiNote}
      </p>

      <div
        className="
          mt-6
          flex
          items-center
          gap-2
        "
      >
        <Clock3
          size={16}
          className="text-muted"
        />

        <p className="text-sm text-muted">
          Estimated duration: {task.duration}
        </p>
      </div>
    </div>
  );
}

export default GeneratedPlanCard;