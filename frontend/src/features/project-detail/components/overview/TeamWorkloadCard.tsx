import {
  User,
} from "lucide-react";

import type {
  WorkloadMember,
} from "../../types/project-overview.types";

type Props = {
  workload: WorkloadMember[];
};

function TeamWorkloadCard({
  workload,
}: Props) {
  const max =
    Math.max(
      ...workload.map(
        (item) => item.assignedTasks
      ),
      1
    );

  return (
    <div
      className="
        rounded-[32px]
        border
        border-border
        bg-surface
        p-6
        shadow-soft
      "
    >
      <div className="mb-6">
        <h3 className="text-lg font-bold">
          Team Workload
        </h3>

        <p className="text-sm text-muted">
          Current task distribution
        </p>
      </div>

      <div className="space-y-5">

        {workload.length === 0 && (
          <p className="text-sm text-muted">
            No workload data available.
          </p>
        )}

        {workload.map((member) => {

          const percent =
            Math.round(
              (member.assignedTasks /
                max) *
                100
            );

          return (
            <div key={member.id}>
              <div className="mb-2 flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-xl
                      bg-primaryLight
                    "
                  >
                    <User size={16} />
                  </div>

                  <div>
                    <p className="font-medium">
                      {member.name}
                    </p>

                    <p className="text-xs text-muted">
                      {member.assignedTasks} tasks
                    </p>
                  </div>

                </div>

                <span className="text-sm font-semibold">
                  {percent}%
                </span>

              </div>

              <div className="h-2 rounded-full bg-surfaceSecondary">
                <div
                  className="
                    h-2
                    rounded-full
                    bg-primary
                    transition-all
                  "
                  style={{
                    width: `${percent}%`,
                  }}
                />
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}

export default TeamWorkloadCard;