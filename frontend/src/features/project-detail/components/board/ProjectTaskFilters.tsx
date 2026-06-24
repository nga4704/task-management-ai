// @/features/project-detail/components/board/ProjectTaskFilters.tsx
import type { TaskStatus, TaskPriority } from "@/features/tasks/types/task.types";

type FilterStatus = TaskStatus | "all" | "overdue";
type FilterPriority = TaskPriority | "all";

type Props = {
  filters: {
    status?: FilterStatus;
    priority?: FilterPriority;
  };

  onChange: (filters: {
    status?: FilterStatus;
    priority?: FilterPriority;
  }) => void;
};

function ProjectTaskFilters({
  filters,
  onChange,
}: Props) {
  return (
    <div
      className="
        flex
        flex-wrap
        gap-3
      "
    >
      <button
        className="btn-primary"
        onClick={() =>
          onChange({ status: "all", priority: "all" })
        }
      >
        All
      </button>

      <button
        className="btn-secondary"
        onClick={() =>
         onChange({ status: "all", priority: "high" })
        }
      >
        High Priority
      </button>

      <button
        className="btn-secondary"
        onClick={() => {
          // temporary FE filter marker
          onChange({ status: "overdue", priority: "all" })
        }}
      >
        Overdue
      </button>

      <button
        className="btn-secondary"
        onClick={() => {
          onChange({ status: "all", priority: "all" });
        }}
      >
        AI Risk
      </button>
    </div>
  );
}

export default ProjectTaskFilters;