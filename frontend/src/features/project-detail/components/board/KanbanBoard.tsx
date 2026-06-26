import { useMemo, useState } from "react";

import {
  DndContext,
  DragOverlay,
  PointerSensor,
  pointerWithin,
  useSensor,
  useSensors,
  type DragEndEvent,
  type DragStartEvent,
} from "@dnd-kit/core";

import { useQueryClient } from "@tanstack/react-query";

import TaskColumn from "./TaskColumn";
import TaskDetailDrawer from "../drawer/TaskDetailDrawer";

import { useTasks } from "@/features/tasks/hooks/useTasks";
import { useTaskSocket } from "@/features/tasks/hooks/useTaskSocket";
import { taskApi } from "@/features/tasks/api/taskApi";

import type {
  Task,
  TaskPriority,
  TaskStatus,
} from "@/features/tasks/types/task.types";

type Props = {
  projectId?: string;

  scope: "project";

  filters?: {
    search?: string;

    status?: TaskStatus;

    priority?: TaskPriority;

    assignee?: string;

    aiRisk?: boolean;
  };
};

function KanbanBoard({
  projectId,
  scope,
  filters,
}: Props) {
  const queryClient =
    useQueryClient();

  const [
    activeTask,
    setActiveTask,
  ] = useState<Task | null>(
    null
  );

  const [
    selectedTask,
    setSelectedTask,
  ] = useState<Task | null>(
    null
  );

  const {
    data: tasks = [],
    isLoading,
  } = useTasks({
    scope,
    projectId,
    filters,
  });

  useTaskSocket(projectId);

  const sensors = useSensors(
    useSensor(
      PointerSensor,
      {
        activationConstraint: {
          distance: 5,
        },
      }
    )
  );

  const todoTasks =
    useMemo(
      () =>
        tasks.filter(
          (t) =>
            t.status === "TODO"
        ),
      [tasks]
    );

  const inProgressTasks =
    useMemo(
      () =>
        tasks.filter(
          (t) =>
            t.status ===
            "IN_PROGRESS"
        ),
      [tasks]
    );

  const reviewTasks =
    useMemo(
      () =>
        tasks.filter(
          (t) =>
            t.status ===
            "REVIEW"
        ),
      [tasks]
    );

  const doneTasks =
    useMemo(
      () =>
        tasks.filter(
          (t) =>
            t.status === "DONE"
        ),
      [tasks]
    );

  if (isLoading) {
    return (
      <div className="py-20 text-center text-muted">
        Loading tasks...
      </div>
    );
  }

  const handleDragStart = (
    event: DragStartEvent
  ) => {
    const task =
      tasks.find(
        (t) =>
          t.id ===
          event.active.id
      ) ?? null;

    setActiveTask(task);
  };

  const handleDragEnd = async (
    event: DragEndEvent
  ) => {
    setActiveTask(null);

    const {
      active,
      over,
    } = event;

    if (!over) return;

    const taskId =
      String(active.id);

    const newStatus =
      String(
        over.id
      ) as TaskStatus;

    const current =
      tasks.find(
        (t) =>
          t.id === taskId
      );

    if (!current) return;

    if (
      current.status ===
      newStatus
    )
      return;

    const queryKey = [
      "tasks",
      scope,
      projectId,
      undefined,
      filters?.status,
      filters?.priority,
      filters?.search,
      filters?.assignee,
      filters?.aiRisk,
    ];

    queryClient.setQueryData<Task[]>(
      queryKey,
      (old = []) =>
        old.map((task) =>
          task.id === taskId
            ? {
                ...task,
                status:
                  newStatus,
              }
            : task
        )
    );

    try {
      await taskApi.moveTask(
        taskId,
        newStatus
      );
    } catch {
      queryClient.invalidateQueries(
        {
          queryKey: [
            "tasks",
          ],
        }
      );
    }

    queryClient.invalidateQueries(
      {
        queryKey: ["tasks"],
      }
    );
  };

  return (
    <>
      <DndContext
        sensors={sensors}
        collisionDetection={
          pointerWithin
        }
        onDragStart={
          handleDragStart
        }
        onDragEnd={
          handleDragEnd
        }
      >
        <div className="grid gap-6 xl:grid-cols-4">
          <TaskColumn
            title="Todo"
            status="TODO"
            tasks={todoTasks}
            onTaskClick={
              setSelectedTask
            }
          />

          <TaskColumn
            title="In Progress"
            status="IN_PROGRESS"
            tasks={
              inProgressTasks
            }
            onTaskClick={
              setSelectedTask
            }
          />

          <TaskColumn
            title="Review"
            status="REVIEW"
            tasks={
              reviewTasks
            }
            onTaskClick={
              setSelectedTask
            }
          />

          <TaskColumn
            title="Done"
            status="DONE"
            tasks={doneTasks}
            onTaskClick={
              setSelectedTask
            }
          />
        </div>

        <DragOverlay>
          {activeTask && (
            <div
              className="
                rounded-2xl
                border
                border-primary/30
                bg-white
                px-4
                py-3
                shadow-xl
              "
            >
              <p className="font-semibold">
                {
                  activeTask.title
                }
              </p>
            </div>
          )}
        </DragOverlay>
      </DndContext>

      <TaskDetailDrawer
        taskId={
          selectedTask?.id
        }
        onClose={() =>
          setSelectedTask(
            null
          )
        }
      />
    </>
  );
}
export default KanbanBoard;