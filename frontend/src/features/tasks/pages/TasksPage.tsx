import { useState } from "react";

import {
  DragDropContext,
  type DropResult,
} from "@hello-pangea/dnd";

import MainLayout from "../../../app/layouts/MainLayout";

import BoardHeader from "../components/BoardHeader";
import BoardFilter from "../components/BoardFilter";
import KanbanColumn from "../components/KanbanColumn";
import TaskStats from "../components/TaskStats";

import { mockTasks } from "../data/mockTasks";

import type {
  TaskColumns,
} from "@/shared/types/task.types";

function TasksPage() {
  const [columns, setColumns] =
    useState<TaskColumns>(mockTasks);

  const handleDragEnd = (
    result: DropResult
  ) => {
    const {
      source,
      destination,
    } = result;

    // Drop outside board
    if (!destination) {
      return;
    }

    // Same position
    if (
      source.droppableId ===
        destination.droppableId &&
      source.index ===
        destination.index
    ) {
      return;
    }

    const sourceColumn =
      columns[
        source.droppableId as keyof TaskColumns
      ];

    const destinationColumn =
      columns[
        destination.droppableId as keyof TaskColumns
      ];

    // SAME COLUMN
    if (
      source.droppableId ===
      destination.droppableId
    ) {
      const updatedTasks = [
        ...sourceColumn,
      ];

      const [movedTask] =
        updatedTasks.splice(
          source.index,
          1
        );

      updatedTasks.splice(
        destination.index,
        0,
        movedTask
      );

      setColumns({
        ...columns,

        [source.droppableId]:
          updatedTasks,
      });

      return;
    }

    // DIFFERENT COLUMN
    const sourceTasks = [
      ...sourceColumn,
    ];

    const destinationTasks = [
      ...destinationColumn,
    ];

    const [movedTask] =
      sourceTasks.splice(
        source.index,
        1
      );

    destinationTasks.splice(
      destination.index,
      0,
      movedTask
    );

    setColumns({
      ...columns,

      [source.droppableId]:
        sourceTasks,

      [destination.droppableId]:
        destinationTasks,
    });
  };

  return (
    <MainLayout
      title="Task Management"
      description="
        AI-powered kanban workflow
        and productivity optimization
      "
    >
      <div className="space-y-6">

        {/* HERO */}
        <BoardHeader />

        {/* FILTER */}
        <BoardFilter />

        {/* STATS */}
        <TaskStats />

        {/* BOARD */}
        <DragDropContext
          onDragEnd={handleDragEnd}
        >
          <section
            className="
              grid
              grid-cols-1
              gap-6
              md:grid-cols-2
              xl:grid-cols-4
            "
          >
            <KanbanColumn
              title="Todo"
              tasks={columns.todo}
              droppableId="todo"
            />

            <KanbanColumn
              title="In Progress"
              tasks={columns.inProgress}
              droppableId="inProgress"
            />

            <KanbanColumn
              title="Review"
              tasks={columns.review}
              droppableId="review"
            />

            <KanbanColumn
              title="Done"
              tasks={columns.done}
              droppableId="done"
            />
          </section>
        </DragDropContext>
      </div>
    </MainLayout>
  );
}

export default TasksPage;