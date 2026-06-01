import {
  Brain,
  Users,
  Clock3,
} from "lucide-react";

const reasons = [
  {
    title: "High Workload",
    icon: Brain,
    description:
      "Current sprint capacity exceeds recommended threshold.",
  },

  {
    title: "Deadline Pressure",
    icon: Clock3,
    description:
      "Several critical tasks share the same deadline.",
  },

  {
    title: "Limited Capacity",
    icon: Users,
    description:
      "Backend resources are currently overloaded.",
  },
];

function ReasonCards() {
  return (
    <section
      className="
        grid
        gap-5

        md:grid-cols-3
      "
    >
      {reasons.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="
              rounded-[28px]

              border
              border-border

              bg-white/70

              p-6

              backdrop-blur-md
            "
          >
            <Icon size={22} />

            <h3
              className="
                mt-4
                font-bold
              "
            >
              {item.title}
            </h3>

            <p
              className="
                mt-2
                text-sm
                text-muted
                leading-6
              "
            >
              {item.description}
            </p>
          </div>
        );
      })}
    </section>
  );
}

export default ReasonCards;