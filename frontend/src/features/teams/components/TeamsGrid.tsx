import TeamCard from "./TeamCard";

import type { Team }
  from "../types/team.types";

interface Props {
  teams: Team[];
}

function TeamsGrid({ teams }: Props) {
  return (
    <div
      className="
        grid
        grid-cols-1
        gap-6

        md:grid-cols-2
        xl:grid-cols-3
      "
    >
      {teams.map((team) => (
        <TeamCard
          key={team.id}
          team={team}
        />
      ))}
    </div>
  );
}

export default TeamsGrid;