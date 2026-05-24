import { useState } from "react";

import {DragDropContext} from "@hello-pangea/dnd";
import type { DropResult } from "@hello-pangea/dnd";

import MainLayout from "../../layouts/MainLayout";

import BoardHeader from "../../components/task-board/BoardHeader";
import BoardFilter from "../../components/task-board/BoardFilter";
import KanbanColumn from "../../components/task-board/KanbanColumn";

import { initialData } from "./tasks";

function TasksPage() {
  const [columns, setColumns] =
    useState(initialData);

  const onDragEnd = (
    result: DropResult
  ) => {
    const { source, destination } = result;

    if (!destination) return;

    const sourceColumn =
      columns[
        source.droppableId as keyof typeof columns
      ];

    const destinationColumn =
      columns[
        destination.droppableId as keyof typeof columns
      ];

    const sourceItems = [...sourceColumn];
    const destinationItems =
      source.droppableId ===
      destination.droppableId
        ? sourceItems
        : [...destinationColumn];

    const [removed] = sourceItems.splice(
      source.index,
      1
    );

    destinationItems.splice(
      destination.index,
      0,
      removed
    );

    setColumns({
      ...columns,

      [source.droppableId]:
        sourceItems,

      [destination.droppableId]:
        destinationItems,
    });
  };

  return (
    <MainLayout>
      <div className="space-y-6">

        <BoardHeader />

        <BoardFilter />

        <DragDropContext
          onDragEnd={onDragEnd}
        >
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              xl:grid-cols-4
              gap-6
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
          </div>
        </DragDropContext>

      </div>
    </MainLayout>
  );
}

export default TasksPage;