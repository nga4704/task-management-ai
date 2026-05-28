import ActivityCard from "./ActivityCard";

import { activityData } from "../data/activityData";

function TeamActivities() {
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
          Recent collaboration updates
        </p>
      </div>

      <div className="mt-6 space-y-5">
        {activityData.map((item) => (
          <ActivityCard
            key={item.id}
            text={item.text}
            time={item.time}
          />
        ))}
      </div>
    </section>
  );
}

export default TeamActivities;