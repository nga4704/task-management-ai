// features/workspace/components/WorkspaceStats.tsx

import StatCard from "@/shared/components/cards/StatCard";

import { workspaceStats } from "../data/mockProjectsStats";

function ProjectsStats() {
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
      {workspaceStats.map((stat) => (
        <StatCard
          key={stat.title}
          {...stat}
        />
      ))}
    </section>
  );
}

export default ProjectsStats;