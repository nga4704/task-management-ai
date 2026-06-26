import {
  CheckCircle2,
  FolderKanban,
  Sparkles,
  Users,
} from "lucide-react";

import StatCard from "@/shared/components/cards/StatCard";

import { useProjectsDashboard }
  from "../hooks/useProjectsDashboard";

function ProjectsStats({ teamId }: { teamId?: string }) {
  const { data, isLoading } = useProjectsDashboard(teamId);


if (isLoading) {
  return (
    <section className="grid ...">
      Loading...
    </section>
  );
}

if (!data) {
  return null;
}

  const stats = [
    {
      title: "Active Projects",
      value: String(
        data.activeProjects
      ),
      description:
        "Running projects",
      icon: FolderKanban,
    },

    {
      title: "Team Members",
      value: String(
        data.totalMembers
      ),
      description:
        "Across workspace",
      icon: Users,
    },

    {
      title: "AI Productivity",
      value: `${data.productivity}%`,
      description:
        "AI optimized",
      highlighted: true,
      icon: Sparkles,
    },

    {
      title: "Completed Projects",
      value: String(
        data.completedProjects
      ),
      description:
        "Finished projects",
      icon: CheckCircle2,
    },
  ];

  return (
    <section
      className="
        grid
        grid-cols-1
        gap-5

        sm:grid-cols-2
        xl:grid-cols-4
      "
    >
      {stats.map((stat) => (
        <StatCard
          key={stat.title}
          {...stat}
        />
      ))}
    </section>
  );
}

export default ProjectsStats;