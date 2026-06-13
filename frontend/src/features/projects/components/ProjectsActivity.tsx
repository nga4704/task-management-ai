import { mockActivities } from "../data/mockProjects";

function ProjectsActivity() {
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
        <h2 className="text-2xl font-bold">
          Team Activities
        </h2>

        <p className="mt-1 text-muted">
          Recent workspace updates
        </p>
      </div>

      <div className="mt-6 space-y-5">

        {mockActivities.map((activity) => (
          <div
            key={activity.id}
            className="flex gap-4"
          >
            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-2xl
                bg-primaryLight
                font-semibold
              "
            >
              {activity.user[0]}
            </div>

            <div
              className="
                flex-1
                rounded-2xl
                bg-surfaceSecondary
                p-4
              "
            >
              <p className="font-medium">
                <span className="font-bold">
                  {activity.user}
                </span>{" "}

                {activity.action}
              </p>

              <p
                className="
                  mt-2
                  text-sm
                  text-muted
                "
              >
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsActivity;