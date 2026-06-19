import { useState } from "react";
import { ChevronDown, FolderKanban } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { useTeamProjects } from "@/features/projects/hooks/useTeamProjects";
import { useTeamStore } from "@/store/teamStore";

function ProjectSwitcher() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const { teamId, projectId } = useParams();

  const selectedTeamId = useTeamStore(
    (state) => state.selectedTeamId
  );

  const activeTeamId = selectedTeamId || teamId;

  const { data: projects = [], isLoading } =
    useTeamProjects(activeTeamId);

  const currentProject =
    projects.find((p: any) => p.id === projectId);

  return (
    <div className="relative mt-4">
      <p className="mb-2 px-1 text-xs font-semibold uppercase tracking-wider text-muted">
        Current Project
      </p>

      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-2xl border border-border bg-surface px-4 py-3 shadow-soft"
      >
        <div className="flex items-center gap-3">
          <FolderKanban size={18} />

          <span className="truncate text-sm font-medium">
            {currentProject?.name || "Select Project"}
          </span>
        </div>

        <ChevronDown size={16} />
      </button>

      {open && (
        <div className="absolute z-50 mt-2 w-full overflow-hidden rounded-2xl border border-border bg-white shadow-xl">
          {isLoading ? (
            <div className="px-4 py-3 text-sm text-muted">
              Loading...
            </div>
          ) : projects.length === 0 ? (
            <div className="px-4 py-3 text-sm text-muted">
              No projects found
            </div>
          ) : (
            projects.map((project: any) => (
              <button
                key={project.id}
                onClick={() => {
                  setOpen(false);
                  navigate(
                    `/teams/${activeTeamId}/projects/${project.id}`
                  );
                }}
                className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm hover:bg-surfaceSecondary ${
                  projectId === project.id
                    ? "bg-primaryLight"
                    : ""
                }`}
              >
                {project.name}
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default ProjectSwitcher;