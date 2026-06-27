import {
  Calendar,
  FolderKanban,
  User,
} from "lucide-react";

import {
  priorityStyles,
  statusLabel,
  statusStyles,
} from "@/shared/constants/task";

import type {
  Task,
} from "@/features/tasks/types/task.types";

import { useNavigate } from "react-router-dom";

type Props = Task;

function TaskCard({
  title,
  priority,
  status,
  progress = 0,
  deadline,
  users_tasks_assignee_idTousers,
  project,

  project_id,
  team_id,
}: Props) {

  const navigate = useNavigate();

  const dueDate =
    deadline
      ? new Date(deadline).toLocaleDateString(
        undefined,
        {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }
      )
      : "No deadline";

  return (
    <div
      className="
        rounded-2xl
        border
        border-border
        bg-surface
        p-4
        transition
        hover:border-primary/30
        hover:shadow-soft
      "
    >
      {/* HEADER */}
      <div className="flex items-start justify-between gap-4">

        <div className="min-w-0 flex-1">

          <div className="flex flex-wrap items-center gap-2">

            <span
              className={`
                rounded-full
                px-2.5
                py-1
                text-xs
                font-medium
                ${priorityStyles[priority]}
              `}
            >
              {priority}
            </span>

            <span
              className={`
                rounded-full
                px-2.5
                py-1
                text-xs
                font-medium
                ${statusStyles[status]}
              `}
            >
              {statusLabel[status]}
            </span>

          </div>

          <h3
            className="
              mt-3
              line-clamp-1
              text-base
              font-semibold
            "
          >
            {title}
          </h3>

        </div>

        {users_tasks_assignee_idTousers && (

          <div className="flex items-center gap-2 shrink-0">

            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-primaryLight
              "
            >
              <User size={16} />
            </div>

            <div className="text-right">

              <div className="text-sm font-medium">
                {users_tasks_assignee_idTousers.full_name}
              </div>

              <div className="text-xs text-muted">
                Assignee
              </div>

            </div>

          </div>

        )}

      </div>

      {/* PROJECT + DEADLINE */}
      <div
        className="
          mt-4
          flex
          flex-wrap
          gap-4
          text-sm
          text-muted
        "
      >

        <div className="flex items-center gap-2">
          <FolderKanban size={15} />
          <span className="truncate">
            {project?.name ?? "Unknown Project"}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Calendar size={15} />
          <span>{dueDate}</span>
        </div>

      </div>

      {/* PROGRESS */}
      <div className="mt-4">

        <div className="mb-2 flex justify-between text-xs">

          <span className="text-muted">
            Progress
          </span>

          <span className="font-semibold">
            {progress}%
          </span>

        </div>

        <div
          className="
            h-2
            overflow-hidden
            rounded-full
            bg-surfaceSecondary
          "
        >
          <div
            className="
              h-full
              rounded-full
              bg-primary
              transition-all
            "
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

      </div>

      {/* FOOTER */}
      <div
        className="
          mt-4
          flex
          justify-end
        "
      >

        <button
          onClick={() =>
            navigate(
              `/teams/${team_id}/projects/${project_id}`
            )
          }
          className="
    rounded-lg
    px-3
    py-1.5
    text-sm
    font-medium
    text-secondary
    hover:bg-secondaryLight
    transition
  "
        >
          Open
        </button>

      </div>

    </div>
  );
}

export default TaskCard;