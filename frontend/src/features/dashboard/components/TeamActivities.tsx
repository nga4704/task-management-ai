import ActivityCard from "./ActivityCard";

import type {
  DashboardActivity,
} from "../types/dashboard.types";

type Props = {
  activities: DashboardActivity[];
};

function TeamActivities({
  activities,
}: Props) {

  return (
    <section
      className="
        rounded-xl
        border
        border-border
        bg-surface
        p-6
        shadow-soft
      "
    >
      <div>
        <h2
          className="
            text-2xl
            font-bold
          "
        >
          Team Activities
        </h2>

        <p className="mt-1 text-muted">
          Latest project activities
        </p>
      </div>

      <div
        className="
    mt-6
    max-h-[650px]
    overflow-y-auto
    pr-2
    space-y-5
  "
      >

        {activities.length === 0 && (
          <div
            className="
        rounded-xl
        border
        border-dashed
        border-border
        py-10
        text-center
        text-muted
      "
          >
            No recent activities.
          </div>
        )}

        {activities.map((activity) => (
          <ActivityCard
            key={activity.id}
            activity={activity}
          />
        ))}

      </div>

    </section>
  );
}

export default TeamActivities;