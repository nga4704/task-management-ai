import { Plus, Users } from "lucide-react";

interface Props {
  onCreateTeam: () => void;
}

function TeamsHeader({ onCreateTeam }: Props) {
  return (
    <div className="flex items-center justify-between">

      {/* LEFT CONTENT */}
      <div className="flex items-center gap-4">

        <div className="rounded-2xl bg-primaryLight p-3">
          <Users size={22} className="text-black" />
        </div>

        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Teams
          </h1>

          <p className="text-sm text-muted mt-1">
            Manage your collaboration workspaces and projects
          </p>
        </div>

      </div>

      {/* RIGHT ACTION */}
      <button
        onClick={onCreateTeam}
        className="
          flex
          items-center
          gap-2

          rounded-2xl
          bg-primary
          px-5
          py-3

          font-semibold
          text-black

          shadow-sm

          transition-all
          hover:scale-[1.02]
          hover:shadow-md
          active:scale-[0.98]
        "
      >
        <Plus size={18} />
        Create Team
      </button>

    </div>
  );
}

export default TeamsHeader;