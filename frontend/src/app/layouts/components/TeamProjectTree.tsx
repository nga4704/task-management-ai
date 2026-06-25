import { useEffect, useState } from "react";
import {
  ChevronRight,
  FolderKanban,
  Users,
} from "lucide-react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { useTeams } from "@/features/teams/hooks/useTeams";
import { useTeamProjects } from "@/features/projects/hooks/useTeamProjects";

function TeamProjectTree() {
  const navigate = useNavigate();
  const location = useLocation();
  const { teamId, projectId } = useParams();

  const { data: teams = [], isLoading } = useTeams();

  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  // auto expand current team
  useEffect(() => {
    if (teamId) {
      setExpanded((prev) => ({
        ...prev,
        [teamId]: true,
      }));
    }
  }, [teamId]);

  const toggle = (id: string) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="space-y-2">
      {/* HEADER */}
      <div className="px-3">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted">
          Teams
        </p>
      </div>

      {/* LOADING */}
      {isLoading && (
        <div className="px-3 text-xs text-muted">Loading teams...</div>
      )}

      {/* LIST */}
      <div className="space-y-1">
        {teams.map((team: any) => {
          const isOpen = expanded[team.id];
          const isActiveTeam = location.pathname.includes(`/teams/${team.id}`);

          return (
            <div key={team.id} className="space-y-2">
              {/* TEAM ROW */}
              <button
                onClick={() => {
                  toggle(team.id);
                  navigate(`/teams/${team.id}/projects`);
                }}
                className={`
                  flex w-full items-center justify-between
                  rounded-xl px-3 py-2.5
                  text-sm transition
                  hover:bg-surfaceSecondary
                  ${isActiveTeam ? "bg-primaryLight font-medium" : ""}
                `}
              >
                <div className="flex items-center gap-2">
                  <Users size={16} />
                  <span className="truncate">{team.name}</span>
                </div>

                <ChevronRight
                  size={16}
                  className={`transition-transform ${
                    isOpen ? "rotate-90" : ""
                  }`}
                />
              </button>

              {/* PROJECTS */}
              {isOpen && (
                <ProjectsList
                  teamId={team.id}
                  activeProjectId={projectId}
                  currentTeamId={teamId}
                  navigate={navigate}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TeamProjectTree;

/* =========================
   PROJECTS LIST
========================= */

function ProjectsList({
  teamId,
  activeProjectId,
  currentTeamId,
  navigate,
}: {
  teamId: string;
  activeProjectId?: string;
  currentTeamId?: string;
  navigate: any;
}) {
  const { data: projects = [], isLoading } = useTeamProjects(teamId);

  const isCurrentTeam = currentTeamId === teamId;

  return (
    <div className="ml-6 mt-2 space-y-3 border-l border-border pl-4">
      <p className="mb-1 text-[11px] uppercase tracking-wider text-muted">
        Projects
      </p>

      {isLoading && (
        <div className="text-xs text-muted">Loading...</div>
      )}

      {!isLoading && projects.length === 0 && (
        <div className="text-xs text-muted">No projects</div>
      )}

      {projects.map((project: any) => {
        const isActive =
          isCurrentTeam && activeProjectId === project.id;

        return (
          <button
            key={project.id}
            onClick={() =>
              navigate(`/teams/${teamId}/projects/${project.id}`)
            }
            className={`
              flex w-full items-center gap-2
              rounded-lg px-2 py-1.5 text-sm
              transition
              hover:bg-surfaceSecondary
              ${isActive ? "bg-primaryLight font-medium" : ""}
            `}
          >
            <FolderKanban size={14} />
            <span className="truncate">{project.name}</span>
          </button>
        );
      })}
    </div>
  );
}