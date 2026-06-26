import {
  AlertTriangle,
  BrainCircuit,
  Search,
} from "lucide-react";

import type {
  TaskPriority,
  TaskStatus,
} from "@/features/tasks/types/task.types";

type FilterStatus =
  | TaskStatus
  | "all"
  | "overdue";

type FilterPriority =
  | TaskPriority
  | "all";

type Props = {
  filters: {
    search: string;
    status: FilterStatus;
    priority: FilterPriority;
    assignee: string;
    aiRisk: boolean;
  };

  assignees: {
    id: string;
    name: string;
  }[];

  onChange: (
    filters: Props["filters"]
  ) => void;
};

function ProjectTaskToolbar({
  filters,
  assignees,
  onChange,
}: Props) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-border
        bg-white
        p-5
        shadow-soft
      "
    >
      <div
        className="
          flex
          flex-wrap
          items-center
          gap-3
        "
      >
        {/* Search */}

        <div
          className="
            flex
            min-w-[260px]
            flex-1
            items-center
            gap-2
            rounded-2xl
            border
            border-border
            px-4
            py-2.5
          "
        >
          <Search
            size={18}
            className="text-muted"
          />

          <input
            placeholder="Search tasks..."
            value={filters.search}
            onChange={(e) =>
              onChange({
                ...filters,
                search: e.target.value,
              })
            }
            className="
              w-full
              bg-transparent
              text-sm
              outline-none
              placeholder:text-muted
            "
          />
        </div>

        {/* Status */}

        <select
          value={filters.status}
          onChange={(e) =>
            onChange({
              ...filters,
              status:
                e.target
                  .value as FilterStatus,
            })
          }
          className="
            h-11
            rounded-xl
            border
            border-border
            bg-white
            px-4
            text-sm
            outline-none
            transition
            hover:border-primary/40
            focus:border-primary
          "
        >
          <option value="all">
            All Status
          </option>

          <option value="TODO">
            Todo
          </option>

          <option value="IN_PROGRESS">
            In Progress
          </option>

          <option value="REVIEW">
            Review
          </option>

          <option value="DONE">
            Done
          </option>
        </select>

        {/* Priority */}

        <select
          value={filters.priority}
          onChange={(e) =>
            onChange({
              ...filters,
              priority:
                e.target
                  .value as FilterPriority,
            })
          }
          className="
            h-11
            rounded-xl
            border
            border-border
            bg-white
            px-4
            text-sm
            outline-none
            transition
            hover:border-primary/40
            focus:border-primary
          "
        >
          <option value="all">
            All Priority
          </option>

          <option value="high">
            High
          </option>

          <option value="medium">
            Medium
          </option>

          <option value="low">
            Low
          </option>
        </select>

        {/* Assignee */}

        <select
          value={filters.assignee}
          onChange={(e) =>
            onChange({
              ...filters,
              assignee:
                e.target.value,
            })
          }
          className="
            h-11
            min-w-[180px]
            rounded-xl
            border
            border-border
            bg-white
            px-4
            text-sm
            outline-none
            transition
            hover:border-primary/40
            focus:border-primary
          "
        >
          <option value="all">
            All Members
          </option>

          {assignees.map(
            (member) => (
              <option
                key={member.id}
                value={member.id}
              >
                {member.name}
              </option>
            )
          )}
        </select>

        {/* AI Risk */}

        <button
          onClick={() =>
            onChange({
              ...filters,
              aiRisk:
                !filters.aiRisk,
            })
          }
          className={`
            flex
            h-11
            items-center
            gap-2
            rounded-xl
            px-4
            text-sm
            font-medium
            transition-all

            ${
              filters.aiRisk
                ? "bg-primary text-white shadow-soft"
                : "border border-border bg-primaryLight hover:bg-primary/10"
            }
          `}
        >
          <BrainCircuit
            size={16}
          />
          AI Risk
        </button>

        {/* Overdue */}

        <button
          onClick={() =>
            onChange({
              ...filters,
              status:
                filters.status ===
                "overdue"
                  ? "all"
                  : "overdue",
            })
          }
          className={`
            flex
            h-11
            items-center
            gap-2
            rounded-xl
            px-4
            text-sm
            font-medium
            transition-all

            ${
              filters.status ===
              "overdue"
                ? "bg-warning text-white shadow-soft"
                : "border border-border bg-warningLight hover:bg-warning/20"
            }
          `}
        >
          <AlertTriangle
            size={16}
          />

          Overdue
        </button>
      </div>
    </div>
  );
}

export default ProjectTaskToolbar;