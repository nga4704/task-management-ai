import {
  Activity,
} from "lucide-react";

import type {
  ActivityItem,
} from "../../types/project-overview.types";

type Props = {
  activities: ActivityItem[];
};

function ProjectActivity({
  activities,
}: Props) {
  return (
    <div className="rounded-[32px] border border-border bg-surface p-6 shadow-soft">

      <h3 className="text-lg font-bold">
        Recent Activity
      </h3>

      <div className="mt-6 space-y-4">

        {activities.length === 0 && (
          <p className="text-muted">
            No activity.
          </p>
        )}

        {activities.map((item) => (
          <div
            key={item.id}
            className="flex gap-4"
          >
            <div className="rounded-xl bg-primaryLight p-2">
              <Activity size={16} />
            </div>

            <div className="flex-1">

              <p className="font-medium">
                {item.type}
              </p>

              <p className="text-xs text-muted">
                {new Date(
                  item.created_at
                ).toLocaleString()}
              </p>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default ProjectActivity;