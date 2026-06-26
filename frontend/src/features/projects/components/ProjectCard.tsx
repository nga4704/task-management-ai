import { BarChart3, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { Project } from "../types/project.types";
import { projectStatusConfig } from "../constants/projectStatus";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  const navigate = useNavigate();
  const statusConfig = projectStatusConfig[project.status];

  const handleOpenProject = () => {
    navigate(`/teams/${project.team_id}/projects/${project.id}`);
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
              inline-flex
              rounded-full
              px-2.5 py-1
              text-[11px]
              font-medium
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

        <div
          className="
            flex h-12 w-12 shrink-0
            items-center justify-center
            rounded-xl
            bg-primaryLight text-black
          "
        >
          <BarChart3 size={18} />
        </div>
      </div>

      {/* PROGRESS */}
      <div className="mt-5">

        <div className="flex items-center justify-between text-xs text-muted mb-2">
          <span>Progress</span>
          <span className="font-medium text-text">
            {project.progress}%
          </span>
        </div>

        <div className="h-2 rounded-full bg-muted/20 overflow-hidden">
          <div
            style={{ width: `${project.progress}%` }}
            className="
              h-full
              bg-primary
              rounded-full
              transition-all duration-300
            "
          />
        </div>

      </div>

      {/* FOOTER */}
      <div className="mt-5 flex items-center justify-between">

        <div className="flex gap-5 text-sm">

          <div>
            <p className="text-xs text-muted">Tasks</p>
            <p className="font-medium text-text">
              {project.taskCount}
            </p>
          </div>

          <div>
            <p className="text-xs text-muted">Members</p>
            <p className="font-medium text-text">
              {project.memberCount}
            </p>
          </div>

        </div>

        <div
          className="
            inline-flex items-center gap-1.5

            rounded-full
            bg-successLight/70
            px-2.5 py-1.5

            text-xs font-medium text-success
          "
        >
          <CheckCircle2 size={14} />
          AI {project.aiScore}%
        </div>

      </div>

    </article>
  );
}

export default ProjectCard;