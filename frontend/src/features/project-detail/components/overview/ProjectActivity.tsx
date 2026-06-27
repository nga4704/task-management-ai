import { Activity } from "lucide-react";

import { useProjectActivities } from "@/features/projects/hooks/useProjectActivities";

import type { ActivityItem } from "../../types/project-overview.types";

type Props = {
  projectId: string;
};

function ProjectActivity({ projectId }: Props) {
  const {
    data: activities = [],
    isLoading,
  } = useProjectActivities(projectId);

  return (
    <div className="rounded-[32px] border border-border bg-surface p-6 shadow-soft">

      <h3 className="text-lg font-bold">
        Recent Activity
      </h3>

      <div
        className="
          mt-6
          max-h-[400px]
          overflow-y-auto
          space-y-5
          pr-2
        "
      >

        {isLoading && (
          <p className="text-muted">
            Loading activities...
          </p>
        )}

        {!isLoading && activities.length === 0 && (
          <p className="text-muted">
            No activity.
          </p>
        )}

        {activities.map((item: ActivityItem) => {
          const userName =
            item.user?.full_name ||
            item.user?.username ||
            "Unknown user";

          let actionText = "";

          switch (item.type) {
            case "PROJECT_CREATED":
              actionText = "created project";
              break;

            case "PROJECT_UPDATED":
              actionText = "updated project";
              break;

            case "TASK_CREATED":
              actionText = "created task";
              break;

            case "TASK_UPDATED":
              actionText = "updated task";
              break;

            case "TASK_COMPLETED":
              actionText = "completed task";
              break;

            default:
              actionText = item.type;
          }

          return (
            <div
              key={item.id}
              className="flex gap-4"
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-primaryLight
                "
              >
                <Activity size={16} />
              </div>

              <div className="flex-1 min-w-0">

                <p className="leading-6">

                  <span className="font-semibold">
                    {userName}
                  </span>{" "}

                  {actionText}{" "}

                  {item.task?.title && (
                    <span className="font-semibold text-black">
                      "{item.task.title}"
                    </span>
                  )}

                </p>

                <p className="mt-1 text-xs text-muted">
                  {new Date(
                    item.created_at
                  ).toLocaleString()}
                </p>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}

export default ProjectActivity;