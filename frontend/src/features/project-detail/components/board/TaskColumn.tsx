import TaskCard from "./TaskCard";
import type { Task } from "@/features/tasks/types/task.types";
import { useDroppable } from "@dnd-kit/core";
import type { TaskStatus } from "@/features/tasks/types/task.types";

type Props = {
  title: string;
  status: TaskStatus;
  tasks: Task[];
  onTaskClick: (task: Task) => void;
};

function TaskColumn({ title, status, tasks, onTaskClick }: Props) {
  const { setNodeRef, isOver } = useDroppable({
    id: status,
  });

  return (
    <div
      ref={setNodeRef}
      className={`
        rounded-[32px]
        bg-surface
        p-4
        min-h-[500px]
        transition
        ${isOver ? "bg-gray-100" : ""}
      `}
    >
      <div className="mb-5 flex justify-between items-center">
        <h3 className="font-bold">{title}</h3>
        <span className="text-xs bg-white px-3 py-1 rounded-full">
          {tasks.length}
        </span>
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} onClick={() => onTaskClick(task)} />
        ))}
      </div>
    </div>
  );
}

export default TaskColumn;