import { Users, FolderKanban, Layers } from "lucide-react";
import type { Team } from "../types/team.types";

import StatCard from "@/shared/components/cards/StatCard";

interface Props {
  teams: Team[];
}

function TeamsStatsBar({ teams }: Props) {
  const totalMembers = teams.reduce(
    (acc, t) => acc + (t.members_count || 0),
    0
  );

  const totalProjects = teams.reduce(
    (acc, t) => acc + (t.projects_count || 0),
    0
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

      <StatCard
        title="Teams"
        value={teams.length}
        icon={Users}
        description="Total workspaces"
      />

      <StatCard
        title="Members"
        value={totalMembers}
        icon={Layers}
        description="Across all teams"
      />

      <StatCard
        title="Projects"
        value={totalProjects}
        icon={FolderKanban}
        description="Active projects"
      />

    </div>
  );
}

export default TeamsStatsBar;