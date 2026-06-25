import ProjectTaskFilters from "../board/ProjectTaskFilters";
import KanbanBoard from "../board/KanbanBoard";
import { useState } from "react";
import type { TaskStatus, TaskPriority } from "@/features/tasks/types/task.types";

type Props = {
  projectId?: string;
  scope: "project";
  filters?: {
    status?: TaskStatus;
    priority?: TaskPriority;
  };
};
type FilterStatus = TaskStatus | "all" | "overdue";
type FilterPriority = TaskPriority | "all";

function BoardTab({
  projectId,
}: Props) {

  const [filters, setFilters] = useState<{
    status?: FilterStatus;
    priority?: FilterPriority;
  }>({
    status: "all",
    priority: "all",
  });

  const mapStatus = (status?: FilterStatus): TaskStatus | undefined => {
    if (!status || status === "all" || status === "overdue") return undefined;
    return status;
  };

  const mapPriority = (priority?: FilterPriority): TaskPriority | undefined => {
    if (!priority || priority === "all") return undefined;
    return priority;
  };

  return (
    <div className="space-y-6">
      <ProjectTaskFilters
        filters={filters}
        onChange={setFilters}
      />

      {projectId && (
        <KanbanBoard
          projectId={projectId}
          scope="project"
          filters={{
            status: mapStatus(filters.status),
            priority: mapPriority(filters.priority),
          }}
        />
      )}
    </div>
  );
}

export default BoardTab;