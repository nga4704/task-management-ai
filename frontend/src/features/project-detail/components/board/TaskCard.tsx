// @/features/project-detail/components/board/TaskCard.tsx

import {
  Calendar,
  AlertTriangle,
} from "lucide-react";

import type { Task } from "@/features/tasks/types/task.types";
import { useDraggable } from "@dnd-kit/core";

type Props = {
  task: Task;

  onClick: () => void;
};

function TaskCard({
  task,
  onClick,
}: Props) {

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
          ? `translate(${transform.x}px, ${transform.y}px)`
          : undefined,
      }}
      onPointerDown={(e) => e.stopPropagation()}
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

        {/* {task.riskScore &&
          task.riskScore > 60 && (
            <AlertTriangle
              size={18}
              className="text-danger"
            />
          )} */}
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
          {/* <div
            className="
              h-full

              rounded-full

              bg-primary
            "
            style={{
              width: `${task.progress}%`,
            }}
          /> */}
        </div>

        {/* <p
          className="
            mt-2

            text-xs
            text-muted
          "
        >
          {task.progress}% complete
        </p> */}
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
          {
            task.deadline
              ? new Date(task.deadline)
                .toLocaleDateString()
              : "No deadline"
          }
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
          {task.assignee?.avatar ? (
            <img
              src={task.assignee.avatar}
              alt={task.assignee?.full_name || "Unassigned"}
              className="h-full w-full rounded-xl object-cover"
            />
          ) : (
            <span className="text-lg">
              {task.assignee?.full_name?.charAt(0) || "?"}
            </span>
          )}
        </div>
      </div>
    </button>
  );
}

export default TaskCard;