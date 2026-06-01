import { useState } from "react";

import { mockTasks } from "../../data/mockTasks";

import TaskColumn from "./TaskColumn";
import TaskDetailDrawer from "./TaskDetailDrawer";

import type { Task } from "../../types/task.types";

function KanbanBoard() {
  const [selectedTask, setSelectedTask] =
    useState<Task | null>(null);

  return (
    <>
      <div
        className="
          grid
          gap-6

          xl:grid-cols-4
        "
      >
        <TaskColumn
          title="Todo"
          tasks={mockTasks.filter(
            (t) => t.status === "todo"
          )}
          onTaskClick={setSelectedTask}
        />

        <TaskColumn
          title="In Progress"
          tasks={mockTasks.filter(
            (t) =>
              t.status === "in-progress"
          )}
          onTaskClick={setSelectedTask}
        />

        <TaskColumn
          title="Review"
          tasks={mockTasks.filter(
            (t) => t.status === "review"
          )}
          onTaskClick={setSelectedTask}
        />

        <TaskColumn
          title="Done"
          tasks={mockTasks.filter(
            (t) => t.status === "done"
          )}
          onTaskClick={setSelectedTask}
        />
      </div>

      <TaskDetailDrawer
        task={selectedTask}
        onClose={() =>
          setSelectedTask(null)
        }
      />
    </>
  );
}

export default KanbanBoard;