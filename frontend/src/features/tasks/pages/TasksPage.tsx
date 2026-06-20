import MainLayout from "@/app/layouts/MainLayout";

import { DragDropContext } from "@hello-pangea/dnd";
import type { DropResult } from "@hello-pangea/dnd";

import { useState } from "react";

import BoardHeader from "../components/BoardHeader";
import BoardFilter from "@/shared/components/cards/BoardFilter";
import TaskStats from "../components/TaskStats";
import KanbanColumn from "../components/KanbanColumn";

import { useTasks } from "@/features/tasks/hooks/useTasks";
import { taskApi } from "@/features/tasks/api/taskApi";

import type { Task, TaskStatus } from "@/features/tasks/types/task.types";
import { useMoveTask } from "@/features/tasks/hooks/useMoveTask";

function TasksPage() {
  const [projectId] = useState<string | undefined>(undefined);

  const { data: tasks = [] } = useTasks(projectId);

   const moveTask = useMoveTask(projectId);

  const groupByStatus = (status: TaskStatus) =>
    tasks.filter((t: Task) => t.status === status);

  const handleDragEnd = async (result: DropResult) => {
    const { destination, draggableId } = result;

    if (!destination) return;

    const newStatus = destination.droppableId as TaskStatus;

    await taskApi.moveTask(draggableId, newStatus);

     moveTask.mutate({
      taskId: draggableId,
      status: newStatus,
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
              tasks={groupByStatus("todo")}
              droppableId="todo"
            />

            <KanbanColumn
              title="In Progress"
              tasks={groupByStatus("in-progress")}
              droppableId="in-progress"
            />

            <KanbanColumn
              title="Review"
              tasks={groupByStatus("review")}
              droppableId="review"
            />

            <KanbanColumn
              title="Done"
              tasks={groupByStatus("done")}
              droppableId="done"
            />

          </section>
        </DragDropContext>
      </div>
    </MainLayout>
  );
}

export default TasksPage;