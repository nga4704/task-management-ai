import {
  TrendingUp,
  CheckCircle2,
  Activity,
  Brain,
} from "lucide-react";

import StatCard from "@/shared/components/cards/StatCard";

const stats = [
  {
    title: "Project Progress",
    value: "72%",
    growth: "+8%",
    icon: TrendingUp,
    highlight: true,
  },

  {
    title: "Completed Tasks",
    value: "94/124",
    growth: "+12",
    icon: CheckCircle2,
  },

  {
    title: "Team Velocity",
    value: "32",
    growth: "+5%",
    icon: Activity,
  },

  {
    title: "AI Health Score",
    value: "89%",
    growth: "+3%",
    icon: Brain,
    highlighted: true,
  },
];

function ProjectStatistics() {
  return (
    <section
      className="
        grid
        gap-5
        sm:grid-cols-2
        xl:grid-cols-4
      "
    >
      {stats.map((item) => (
        <StatCard
          key={item.title}
          {...item}
        />
      ))}
    </section>
  );
}

export default ProjectStatistics;