import { useState, useMemo } from "react";
import TaskColumn from "./TaskColumn";
import TaskDetailDrawer from "../drawer/TaskDetailDrawer";

import type { Task, TaskStatus } from "@/features/tasks/types/task.types";
import { useTasks } from "@/features/tasks/hooks/useTasks";
import { useTaskSocket } from "@/features/tasks/hooks/useTaskSocket";
import { taskApi } from "@/features/tasks/api/taskApi";
import { useQueryClient } from "@tanstack/react-query";

import {
  DndContext,
  pointerWithin,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

type Props = {
  projectId?: string;
  scope: "project";
  filters?: {
    status?: TaskStatus;
    priority?: any;
  };
};

function KanbanBoard({ projectId, scope, filters }: Props) {
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const queryClient = useQueryClient();

  const { data: tasks = [], isLoading } = useTasks({
    scope,
    projectId,
    filters,
  });

  useTaskSocket(projectId);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 },
    })
  );



  // 🔥 OPTIMIZE FILTER (avoid re-filter every render in JSX)
  const todoTasks = useMemo(
    () => tasks.filter((t) => t.status === "TODO"),
    [tasks]
  );

  const inProgressTasks = useMemo(
    () => tasks.filter((t) => t.status === "IN_PROGRESS"),
    [tasks]
  );

  const reviewTasks = useMemo(
    () => tasks.filter((t) => t.status === "REVIEW"),
    [tasks]
  );

  const doneTasks = useMemo(
    () => tasks.filter((t) => t.status === "DONE"),
    [tasks]
  );

  if (isLoading) return <div>Loading tasks...</div>;

  const handleDragStart = (event: any) => {
    const task = tasks.find((t) => t.id === event.active.id);
    setActiveTask(task || null);
  };

  const handleDragEnd = (event: any) => {
    setActiveTask(null);

    const { active, over } = event;
    if (!over) return;

    const taskId = active.id;
    const newStatus = over.id;

    if (!taskId || !newStatus) return;

    const queryKey = ["tasks", projectId, filters?.status, filters?.priority];

    // 🔥 1. OPTIMISTIC UPDATE (NO LAG)
    queryClient.setQueryData(queryKey, (old: any) => {
      if (!old) return old;

      return old.map((t: Task) =>
        t.id === taskId ? { ...t, status: newStatus } : t
      );
    });

    // 🔥 2. FIRE AND FORGET API (no await => no lag)
    taskApi.moveTask(taskId, newStatus).catch(() => {
      // rollback nếu fail
      queryClient.invalidateQueries({ queryKey: ["tasks"], exact: false });
    });

    // 🔥 3. SOFT SYNC (optional)
    queryClient.invalidateQueries({
      queryKey: ["tasks"],
      exact: false,
    });
  };

  return (
    <>
      <DndContext
        sensors={sensors}
        collisionDetection={pointerWithin}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="grid gap-6 xl:grid-cols-4">
          <TaskColumn
            title="Todo"
            status="TODO"
            tasks={todoTasks}
            onTaskClick={setSelectedTask}
          />

          <TaskColumn
            title="In Progress"
            status="IN_PROGRESS"
            tasks={inProgressTasks}
            onTaskClick={setSelectedTask}
          />

          <TaskColumn
            title="Review"
            status="REVIEW"
            tasks={reviewTasks}
            onTaskClick={setSelectedTask}
          />

          <TaskColumn
            title="Done"
            status="DONE"
            tasks={doneTasks}
            onTaskClick={setSelectedTask}
          />
        </div>

        <TaskDetailDrawer
          taskId={selectedTask?.id}
          onClose={() => setSelectedTask(null)}
        />

        {/* 🔥 DRAG PREVIEW (LIGHTWEIGHT) */}
        <DragOverlay>
          {activeTask ? (
            <div className="px-3 py-2 bg-white shadow-lg rounded-xl text-sm">
              {activeTask.title}
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </>
  );
}

export default KanbanBoard;