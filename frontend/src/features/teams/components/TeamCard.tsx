import { useNavigate } from "react-router-dom";
import {
  Users,
  Calendar,
  Hash,
  ArrowRight,
  FolderKanban,
  LayoutGrid,
  ExternalLink,
} from "lucide-react";

import { useTeamStore } from "@/store/teamStore";
import type { Team } from "../types/team.types";

interface Props {
  team: Team;
}

function TeamCard({ team }: Props) {
  const navigate = useNavigate();
  const setSelectedTeam = useTeamStore((state) => state.setSelectedTeam);

  const handleClick = () => {
    setSelectedTeam(team.id, team.name);
    navigate(`/teams/${team.id}/projects`);
  };

  return (
    <button
      onClick={handleClick}
      className="
        group w-full text-left

        rounded-3xl border border-border bg-surface
        p-6

        transition-all duration-300

        hover:-translate-y-1
        hover:shadow-soft
        hover:border-primary/40
      "
    >

      {/* HEADER */}
      <div className="space-y-2">
        <div className="flex items-start justify-between">

          <h3 className="text-lg font-semibold text-text group-hover:text-primary transition">
            {team.name}
          </h3>

          {/* WORKSPACE ICON BADGE */}
          <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-primaryLight text-black">
            <LayoutGrid size={16} />
          </div>

        </div>

        <p className="text-sm text-muted line-clamp-2">
          {team.description || "No description provided for this team."}
        </p>
      </div>

      {/* STATS */}
      <div className="mt-5 flex gap-2">

        <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-muted/10">
          <Users size={14} className="text-muted" />
          <span className="text-sm font-semibold text-text">
            {team.members_count ?? 0}
          </span>
          <span className="text-xs text-muted">members</span>
        </div>

        <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-muted/10">
          <FolderKanban size={14} className="text-muted" />
          <span className="text-sm font-semibold text-text">
            {team.projects_count ?? 0}
          </span>
          <span className="text-xs text-muted">projects</span>
        </div>

      </div>

      {/* META */}
      <div className="mt-5 space-y-2 border-t border-border pt-4 text-xs text-muted">

        <div className="flex items-center gap-2">
          <Hash size={12} />
          <span className="font-mono bg-muted/10 px-2 py-0.5 rounded-md">
            {team.slug}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Calendar size={12} />
          <span>
            Created{" "}
            {new Date(team.created_at).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>

      </div>

      {/* CTA ICON */}
      <div className="mt-5 flex items-center justify-end">

        <div
          className="
            flex items-center justify-center
            w-9 h-9
            rounded-xl

            bg-primaryLight text-black

            transition
            group-hover:translate-x-1
          "
        >
          <ExternalLink size={16} />
        </div>

      </div>

    </button>
  );
}

export default TeamCard;