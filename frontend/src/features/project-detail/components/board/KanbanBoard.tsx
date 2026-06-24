import { useState } from "react";

import TaskColumn from "./TaskColumn";
import TaskDetailDrawer from "./TaskDetailDrawer";

import type { Task, TaskStatus, TaskPriority } from "@/features/tasks/types/task.types";

import { useTasks }
  from "@/features/tasks/hooks/useTasks";

import { useTaskSocket } from "@/features/tasks/hooks/useTaskSocket";
import { taskApi } from "@/features/tasks/api/taskApi";
import { DndContext } from "@dnd-kit/core";
import { queryClient } from "@/lib/queryClient";
import { closestCorners } from "@dnd-kit/core";

type Props = {
  projectId: string;
  filters?: {
    status?: TaskStatus;
    priority?: TaskPriority;
  };
};

function KanbanBoard({
  projectId,
  filters
}: Props) {
  const queryKey = [
    "tasks",
    projectId,
    filters?.status,
    filters?.priority,
  ];

  const [selectedTask, setSelectedTask] =
    useState<Task | null>(null);

  const { data: tasks = [], isLoading } = useTasks({
    projectId,
    filters,
  });

  useTaskSocket(projectId);

  if (isLoading) {
    return (
      <div>
        Loading tasks...
      </div>
    );
  }

  const handleDragEnd = async (event: any) => {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id as string;
    const newStatus = over.id as TaskStatus;

    if (!taskId || !newStatus) return;

    // 1. optimistic update
    queryClient.setQueryData(queryKey, (old: any) => {
      if (!old) return old;

      return old.map((t: any) =>
        t.id === taskId ? { ...t, status: newStatus } : t
      );
    });

    // 2. call API
    await taskApi.moveTask(taskId, newStatus);
  };

  return (
    <>
      <DndContext
        collisionDetection={closestCorners}
        onDragEnd={handleDragEnd}
      >
        <div
          className="
          grid
          gap-6

          xl:grid-cols-4
        "
        >
          <TaskColumn
            title="Todo"
            status="TODO"
            tasks={tasks.filter(t => t.status === "TODO")}
            onTaskClick={setSelectedTask}
          />

          <TaskColumn
            title="In Progress"
            status="IN_PROGRESS"
            tasks={tasks.filter(
              (t) =>
                t.status === "IN_PROGRESS"
            )}
            onTaskClick={setSelectedTask}
          />

          <TaskColumn
            title="Review"
            status="REVIEW"
            tasks={tasks.filter(
              (t) => t.status === "REVIEW"
            )}
            onTaskClick={setSelectedTask}
          />

          <TaskColumn
            title="Done"
            status="DONE"
            tasks={tasks.filter(
              (t) => t.status === "DONE"
            )}
            onTaskClick={setSelectedTask}
          />
        </div>

        <TaskDetailDrawer
          taskId={selectedTask?.id}
          onClose={() =>
            setSelectedTask(null)
          }
        />
      </DndContext>
    </>
  );
}

export default KanbanBoard;