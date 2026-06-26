import TeamCard from "./TeamCard";
import type { Team } from "../types/team.types";

interface Props {
  teams: Team[];
}

function TeamsGrid({ teams }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {teams.map((team) => (
        <TeamCard key={team.id} team={team} />
      ))}
    </div>
  );
}

export default TeamsGrid;