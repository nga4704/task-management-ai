import {
  Plus,
  Sparkles,
  Users,
  Settings,
  FolderKanban,
  ArrowLeftRight ,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Props {
  team?: {
    id: string;
    name: string;
    description?: string;
    members_count?: number;
    projects_count?: number;
  };

  onCreateProject: () => void;
  onOpenMembers: () => void;
  onOpenSettings: () => void;
}

function WorkspaceHeader({
  team,
  onCreateProject,
  onOpenMembers,
  onOpenSettings,
}: Props) {
  const navigate = useNavigate();

  return (
    <section className="rounded-3xl border border-border bg-surface p-6 shadow-sm">

      <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">

        {/* LEFT */}
        <div className="space-y-3">

          <div className="inline-flex items-center gap-2 rounded-full bg-primaryLight px-3 py-1 text-xs text-black w-fit">
            <Sparkles size={14} />
            Workspace
          </div>

          <div>
            <h1 className="text-xl font-semibold text-text">
              {team?.name ?? "Select workspace"}
            </h1>

            <p className="text-sm text-muted mt-1 max-w-xl">
              {team?.description ?? "Choose a workspace to start working"}
            </p>
          </div>

          <div className="flex items-center gap-5 text-sm text-muted">

            <div className="flex items-center gap-2">
              <Users size={15} />
              <span>{team?.members_count ?? 0}</span>
              <span>members</span>
            </div>

            <div className="flex items-center gap-2">
              <FolderKanban size={15} />
              <span>{team?.projects_count ?? 0}</span>
              <span>projects</span>
            </div>

          </div>

        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex flex-wrap gap-2">

          <button
            onClick={onOpenMembers}
            className="flex items-center gap-2 rounded-xl border border-border bg-white px-3 py-2 text-sm hover:bg-muted/10 transition"
          >
            <Users size={16} />
            Members
          </button>

          <button
            onClick={onOpenSettings}
            className="flex items-center gap-2 rounded-xl border border-border bg-white px-3 py-2 text-sm hover:bg-muted/10 transition"
          >
            <Settings size={16} />
            Settings
          </button>

          <button
            onClick={onCreateProject}
            className="flex items-center gap-2 rounded-xl bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition"
          >
            <Plus size={16} />
            Project
          </button>

          <button
            onClick={() => navigate("/teams")}
            className="flex items-center gap-2 rounded-xl border border-border bg-white px-3 py-2 text-sm hover:bg-muted/10 transition"
          >
            <ArrowLeftRight  size={16} />
            Switch
          </button>

        </div>

      </div>
    </section>
  );
}

export default WorkspaceHeader;