import {
  CheckCircle2,
  FolderKanban,
  Users,
  TrendingUp,
} from "lucide-react";

import StatCard from "@/shared/components/cards/StatCard";

const stats = [
  {
    title: "Progress",
    value: "72%",
    growth: "+12%",
    icon: TrendingUp,
    highlight: true,
  },

  {
    title: "Tasks",
    value: "124",
    growth: "+18%",
    icon: FolderKanban,
  },

  {
    title: "Completed",
    value: "94",
    growth: "+24%",
    icon: CheckCircle2,
  },

  {
    title: "Members",
    value: "12",
    growth: "+3%",
    icon: Users,
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