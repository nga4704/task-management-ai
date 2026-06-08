import {
  CheckCircle2,
  MessageSquare,
  UserPlus,
  Brain,
} from "lucide-react";

const activities = [
  {
    icon: CheckCircle2,
    title:
      "Task 'Dashboard UI' marked as completed",
    time: "15 minutes ago",
  },

  {
    icon: UserPlus,
    title:
      "Sarah joined the project",
    time: "1 hour ago",
  },

  {
    icon: MessageSquare,
    title:
      "New comment added to API Integration task",
    time: "2 hours ago",
  },

  {
    icon: Brain,
    title:
      "AI detected schedule risk in Backend Sprint",
    time: "5 hours ago",
  },
];

function ProjectActivity() {
  return (
    <section
      className="
        rounded-[32px]
        border
        border-border
        bg-surface
        p-6
        shadow-soft
      "
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold">
            Recent Activity
          </h3>

          <p className="text-sm text-muted mt-1">
            Latest project updates
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-5">

        {activities.map(
          (activity, index) => {
            const Icon =
              activity.icon;

            return (
              <div
                key={index}
                className="
                  flex
                  gap-4

                  rounded-2xl
                  border
                  border-border

                  p-4
                "
              >
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center

                    rounded-xl

                    bg-primaryLight
                  "
                >
                  <Icon size={18} />
                </div>

                <div>
                  <h4 className="font-medium">
                    {activity.title}
                  </h4>

                  <p
                    className="
                      mt-1
                      text-sm
                      text-muted
                    "
                  >
                    {activity.time}
                  </p>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}

export default ProjectActivity;