import type { Team } from "../types/team.types";

function TeamMetaCard({ team }: { team: Team }) {
  return (
    <div className="rounded-3xl border border-border bg-surface p-6 space-y-3">

      <div>
        <h3 className="text-lg font-semibold">
          {team.name}
        </h3>

        <p className="text-sm text-muted">
          {team.description || "No description"}
        </p>
      </div>

      <div className="text-xs text-muted space-y-1">
        <p>
          Created:{" "}
          {new Date(team.created_at).toLocaleDateString()}
        </p>

        <p>
          Members: {team.members_count ?? 0}
        </p>

        <p>
          Slug: {team.slug}
        </p>
      </div>
    </div>
  );
}

export default TeamMetaCard;