import {
  Circle,
} from "lucide-react";

import {
  useDroppable,
} from "@dnd-kit/core";

import type {
  Task,
  TaskStatus,
} from "@/features/tasks/types/task.types";

import TaskCard from "./TaskCard";

type Props = {
  title: string;
  status: TaskStatus;
  tasks: Task[];
  onTaskClick: (task: Task) => void;
};

const statusColor: Record<
  TaskStatus,
  string
> = {
  TODO: "bg-slate-400",

  IN_PROGRESS:
    "bg-blue-500",

  REVIEW:
    "bg-amber-500",

  DONE:
    "bg-emerald-500",
};

function TaskColumn({
  title,
  status,
  tasks,
  onTaskClick,
}: Props) {
  const {
    setNodeRef,
    isOver,
  } = useDroppable({
    id: status,
  });

  return (
    <section
      ref={setNodeRef}
      className={`
        flex
        min-h-[650px]
        flex-col
        rounded-[32px]
        border
        border-border
        bg-white
        transition-all
        duration-200

        ${
          isOver
            ? `
              border-primary
              bg-primaryLight/40
              shadow-card
            `
            : ""
        }
      `}
    >
      {/* HEADER */}

      <div
        className="
          sticky
          top-0
          z-10
          rounded-t-[32px]
          border-b
          border-border
          bg-white/90
          px-5
          py-4
          backdrop-blur
        "
      >
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <span
              className={`
                h-3
                w-3
                rounded-full
                ${statusColor[status]}
              `}
            />

            <h3 className="font-semibold text-text">
              {title}
            </h3>

          </div>

          <span
            className="
              rounded-full
              bg-primaryLight
              px-3
              py-1
              text-xs
              font-semibold
              text-black
            "
          >
            {tasks.length}
          </span>

        </div>
      </div>

      {/* BODY */}

      <div className="flex-1 space-y-4 p-5">

        {tasks.length === 0 ? (
          <div
            className="
              flex
              h-40
              flex-col
              items-center
              justify-center
              rounded-2xl
              border
              border-dashed
              border-border
              text-center
            "
          >
            <Circle
              size={26}
              className="text-muted"
            />

            <p className="mt-3 text-sm font-medium text-muted">
              No tasks
            </p>

            <p className="mt-1 text-xs text-muted">
              Drag a task here
            </p>
          </div>
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onClick={() =>
                onTaskClick(task)
              }
            />
          ))
        )}

      </div>
    </section>
  );
}

export default TaskColumn;