import {
  CheckCircle2,
  CircleDashed,
  ClipboardList,
  Pencil,
  UserPlus,
  FolderKanban,
} from "lucide-react";

import type {
  DashboardActivity,
} from "../types/dashboard.types";

type Props = {
  activity: DashboardActivity;
};

function ActivityCard({
  activity,
}: Props) {

  const getIcon = () => {

    switch (activity.type) {

      case "TASK_CREATED":
        return <ClipboardList size={18} />;

      case "TASK_UPDATED":
        return <Pencil size={18} />;

      case "TASK_ASSIGNED":
        return <UserPlus size={18} />;

      case "TASK_STATUS_CHANGED":
        return <CheckCircle2 size={18} />;

      case "TASK_PROGRESS_UPDATED":
        return <CircleDashed size={18} />;

      case "PROJECT_CREATED":
      case "PROJECT_UPDATED":
      case "PROJECT_STATUS_CHANGED":
        return <FolderKanban size={18} />;

      default:
        return <ClipboardList size={18} />;

    }

  };

  const getTitle = () => {

    switch (activity.type) {

      case "TASK_CREATED":
        return "Task created";

      case "TASK_UPDATED":
        return "Task updated";

      case "TASK_ASSIGNED":
        return "Task assigned";

      case "TASK_STATUS_CHANGED":
        return "Task status changed";

      case "TASK_PROGRESS_UPDATED":
        return "Task progress updated";

      case "PROJECT_CREATED":
        return "Project created";

      case "PROJECT_UPDATED":
        return "Project updated";

      case "PROJECT_STATUS_CHANGED":
        return "Project status changed";

      default:
        return activity.type;

    }

  };

  const getPayloadText = () => {

    if (!activity.payload) return null;

    const {
      title,
      from,
      to,
      progress,
      assigneeId,
    } = activity.payload;

    const parts: string[] = [];

    if (title) {
      parts.push(title);
    }

    if (from && to) {
      parts.push(`${from} → ${to}`);
    }

    if (progress !== undefined) {
      parts.push(`Progress: ${progress}%`);
    }

    if (assigneeId) {
      parts.push("Assigned");
    }

    return parts.join(" • ");

  };

  const createdAt =
    new Date(activity.created_at).toLocaleString(
      "en-GB",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }
    );

  return (

    <div className="flex gap-4">

      {/* <div
        className="
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-primaryLight
          text-primary
        "
      >
        {getIcon()}
      </div> */}

      <div
        className="
          flex-1
          rounded-md
          bg-surfaceSecondary
          p-3
        "
      >

        <div
          className="
            flex
            items-start
            justify-between
            gap-3
          "
        >

          <h4 className="font-semibold">
            {getTitle()}
          </h4>

          {activity.project?.name && (
            <span
              className="
                shrink-0
                rounded-full
                bg-secondaryLight
                px-2.5
                py-1
                text-[11px]
                font-medium
              "
            >
              {activity.project.name}
            </span>
          )}

        </div>

        {getPayloadText() && (

          <p
            className="
              mt-2
              text-sm
              text-muted
              truncate
            "
            title={getPayloadText()!}
          >
            {getPayloadText()}
          </p>

        )}

        <p
          className="
            mt-3
            text-xs
            text-muted
          "
        >
          {createdAt}
        </p>

      </div>

    </div>

  );

}

export default ActivityCard;