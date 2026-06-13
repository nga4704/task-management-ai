import { useNavigate } from "react-router-dom";

import { Users } from "lucide-react";

import type { Team }
  from "../types/team.types";

interface Props {
  team: Team;
}

function TeamCard({ team }: Props) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() =>
        navigate(`/teams/${team.id}`)
      }
      className="
        w-full
        rounded-3xl
        border
        border-border
        bg-surface
        p-6
        text-left
        transition-all
        hover:scale-[1.01]
      "
    >
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold">
            {team.name}
          </h3>

          <p className="text-sm text-muted">
            {team.description}
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted">
          <Users size={16} />

          <span>
            {team.members_count ?? 0} members
          </span>
        </div>
      </div>
    </button>
  );
}

export default TeamCard;