import MainLayout from "@/app/layouts/MainLayout";
import { useParams } from "react-router-dom";
import { DragDropContext } from "@hello-pangea/dnd";
import type { DropResult } from "@hello-pangea/dnd";

import { useMemo, useState } from "react";

import BoardHeader from "../components/BoardHeader";
import BoardFilter from "@/shared/components/cards/BoardFilter";
import TaskStats from "../components/TaskStats";
import KanbanColumn from "../components/KanbanColumn";
import TaskDetailDrawer from "@/features/project-detail/components/drawer/TaskDetailDrawer";

import { useTasks } from "@/features/tasks/hooks/useTasks";
import { useMoveTask } from "@/features/tasks/hooks/useMoveTask";

import type { Task, TaskStatus } from "@/features/tasks/types/task.types";

function TasksPage() {
  const { projectId } = useParams();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "high" | "ai">("all");
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);

  const { data: tasks = [] } = useTasks({
    scope: "my",
    projectId,
  });

  const moveTask = useMoveTask({
    scope: "my",
    projectId,
  });

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchSearch = task.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchFilter =
        filter === "all"
          ? true
          : filter === "high"
          ? task.priority === "high"
          : filter === "ai"
          ? task.ai_suggested
          : true;

      return matchSearch && matchFilter;
    });
  }, [tasks, search, filter]);

  const groupByStatus = useMemo(() => {
    const map: Record<TaskStatus, Task[]> = {
      TODO: [],
      IN_PROGRESS: [],
      REVIEW: [],
      DONE: [],
    };

    filteredTasks.forEach((t) => {
      map[t.status].push(t);
    });

    return map;
  }, [filteredTasks]);

  const handleDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;
    if (destination.droppableId === source.droppableId) return;

    const newStatus = destination.droppableId as TaskStatus;

    moveTask.mutate({
      taskId: draggableId,
      status: newStatus,
    });
  };

  return (
    <MainLayout title="Task Management" description="AI-powered task system">
      <div className="space-y-6">
        <BoardHeader />

        <BoardFilter
          search={search}
          onSearchChange={setSearch}
          filter={filter}
          onFilterChange={setFilter}
        />

        <TaskStats />

        <DragDropContext onDragEnd={handleDragEnd}>
          <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <KanbanColumn
              title="Todo"
              tasks={groupByStatus.TODO}
              droppableId="TODO"
              onSelectTask={setSelectedTaskId}
            />

            <KanbanColumn
              title="In Progress"
              tasks={groupByStatus.IN_PROGRESS}
              droppableId="IN_PROGRESS"
              onSelectTask={setSelectedTaskId}
            />

            <KanbanColumn
              title="Review"
              tasks={groupByStatus.REVIEW}
              droppableId="REVIEW"
              onSelectTask={setSelectedTaskId}
            />

            <KanbanColumn
              title="Done"
              tasks={groupByStatus.DONE}
              droppableId="DONE"
              onSelectTask={setSelectedTaskId}
            />
          </section>
        </DragDropContext>

        <TaskDetailDrawer
          taskId={selectedTaskId ?? undefined}
          projectId={projectId}
          onClose={() => setSelectedTaskId(null)}
        />
      </div>
    </MainLayout>
  );
}

export default TasksPage;