import TaskCard from "./TaskCard";

import type { Task } from "../../types/task.types";

type Props = {
  title: string;

  tasks: Task[];

  onTaskClick: (
    task: Task
  ) => void;
};

function TaskColumn({
  title,
  tasks,
  onTaskClick,
}: Props) {
  return (
    <div
      className="
        rounded-[32px]

        bg-surface

        p-4
      "
    >
      <div
        className="
          mb-5

          flex
          items-center
          justify-between
        "
      >
        <h3 className="font-bold">
          {title}
        </h3>

        <span
          className="
            rounded-full

            bg-white

            px-3
            py-1

            text-xs
            font-semibold
          "
        >
          {tasks.length}
        </span>
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onClick={() =>
              onTaskClick(task)
            }
          />
        ))}
      </div>
    </div>
  );
}

export default TaskColumn;