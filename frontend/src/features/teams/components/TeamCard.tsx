import { useNavigate } from "react-router-dom";
import { Users } from "lucide-react";

import {
  useWorkspaceStore,
} from "@/store/workspaceStore";

import type { Team } from "../types/team.types";

interface Props {
  team: Team;
}

function TeamCard({ team }: Props) {
  const navigate = useNavigate();

  const setSelectedTeam =
    useWorkspaceStore(
      (state) => state.setSelectedTeam
    );

  const handleClick = () => {

    setSelectedTeam(team.id);

    navigate(`/teams/${team.id}`);
  };

  return (
    <button
      onClick={handleClick}
      className="
        w-full
        rounded-3xl
        border
        border-border
        bg-surface
        p-6
        text-left
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
            {team.members_count ?? 0}
            {" "}
            members
          </span>
        </div>
      </div>
    </button>
  );
}

export default TeamCard;