import {
  BarChart3,
  CheckCircle2,
  ListTodo,
  Users,
  Sparkles,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import type { Project } from "../types/project.types";
import { projectStatusConfig } from "../constants/projectStatus";
import { useProjectStore } from "@/store/projectStore";
import { useTeamStore } from "@/store/teamStore";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  const setSelectedProject =
    useProjectStore(
      state => state.setSelectedProject
    );

  const setSelectedTeam =
    useTeamStore(
      state => state.setSelectedTeam
    );
  const navigate = useNavigate();
  const statusConfig = projectStatusConfig[project.status];

  const handleOpenProject = () => {

    setSelectedTeam(
      project.team_id,
      ""
    );

    setSelectedProject(
      project.id,
      project.name
    );

    navigate(
      `/teams/${project.team_id}/projects/${project.id}`
    );
  };

  return (
    <article
      onClick={handleOpenProject}
      className="
        group cursor-pointer
        rounded-2xl border border-border bg-surface
        p-5
        transition-all duration-200
        hover:-translate-y-0.5
        hover:border-primary/30
        hover:shadow-soft
      "
    >
      {/* HEADER */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <span
            className={`
              inline-flex rounded-full px-2.5 py-1
              text-[11px] font-medium
              ${statusConfig.className}
            `}
          >
            {statusConfig.label}
          </span>

          <h3 className="mt-3 text-lg font-semibold text-text line-clamp-1 group-hover:text-primary transition">
            {project.name}
          </h3>

          <p className="mt-2 text-sm text-muted line-clamp-2">
            {project.description}
          </p>
        </div>

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primaryLight text-black">
          <BarChart3 size={18} />
        </div>
      </div>

      {/* PROGRESS */}
      <div className="mt-5">
        <div className="flex items-center justify-between text-xs text-muted mb-2">
          <div className="flex items-center gap-1">
            <BarChart3 size={14} />
            <span>Progress</span>
          </div>

          <span className="font-medium text-text">
            {project.progress}%
          </span>
        </div>

        <div className="h-2 rounded-full bg-muted/20 overflow-hidden">
          <div
            style={{ width: `${project.progress}%` }}
            className="h-full bg-primary rounded-full transition-all duration-300"
          />
        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-5 flex items-center justify-between">
        <div className="flex gap-5 text-sm">
          {/* TASKS */}
          <div>
            <div className="flex items-center gap-2 text-muted">
              <ListTodo size={14} />
              <span>Tasks</span>
              <p className="font-medium text-text  text-md">
                {project.taskCount}
              </p>
            </div>

          </div>

          {/* MEMBERS */}
          <div>
            <div className="flex items-center gap-2 text-muted">
              <Users size={14} />
              <span>Members</span>
              <p className="font-medium text-text text-md">
                {project.memberCount}
              </p>
            </div>

          </div>
        </div>

        {/* AI SCORE */}
        <div
          className="
            inline-flex items-center gap-1.5
            rounded-full bg-successLight/70
            px-2.5 py-1.5
            text-xs font-medium text-success
          "
        >
          <Sparkles size={14} />
          AI {project.aiScore}%
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;