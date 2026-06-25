import MainLayout from "@/app/layouts/MainLayout";
import { useParams } from "react-router-dom";
import { DragDropContext } from "@hello-pangea/dnd";
import type { DropResult } from "@hello-pangea/dnd";

import { useState } from "react";

import BoardHeader from "../components/BoardHeader";
import BoardFilter from "@/shared/components/cards/BoardFilter";
import TaskStats from "../components/TaskStats";
import KanbanColumn from "../components/KanbanColumn";

import { useTasks } from "@/features/tasks/hooks/useTasks";

import type { Task, TaskStatus } from "@/features/tasks/types/task.types";
import { useMoveTask } from "@/features/tasks/hooks/useMoveTask";

function TasksPage() {
  const { projectId } = useParams();

  const { data: tasks = [] } = useTasks({
    scope: "my",
  });

  const moveTask = useMoveTask(projectId);

  const groupByStatus = (status: TaskStatus) =>
    tasks.filter((t: Task) => t.status === status);

  const handleDragEnd = (
    result: DropResult
  ) => {
    const { destination, draggableId } = result;

    if (!destination) return;

    moveTask.mutate({
      taskId: draggableId,
      status: destination.droppableId as TaskStatus,
    });
  };

  return (
    <MainLayout
      title="Task Management"
      description="AI-powered task system"
    >
      <div className="space-y-6">
        <BoardHeader />

        <BoardFilter />

        <TaskStats />

        <DragDropContext onDragEnd={handleDragEnd}>
          <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <KanbanColumn
              title="Todo"
              tasks={groupByStatus("TODO")}
              droppableId="TODO"
            />

            <KanbanColumn
              title="In Progress"
              tasks={groupByStatus("IN_PROGRESS")}
              droppableId="IN_PROGRESS"
            />

            <KanbanColumn
              title="Review"
              tasks={groupByStatus("REVIEW")}
              droppableId="REVIEW"
            />

            <KanbanColumn
              title="Done"
              tasks={groupByStatus("DONE")}
              droppableId="DONE"
            />

          </section>
        </DragDropContext>
      </div>
    </MainLayout>
  );
}

export default TasksPage;