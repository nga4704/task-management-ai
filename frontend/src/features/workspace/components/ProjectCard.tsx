import {
  BarChart3,
  CheckCircle2,
} from "lucide-react";

import type { Project } from "../types/workspace.types";

import { projectStatusStyles } from "../constants/workspaceStyles";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <article
      className="
        rounded-xl
        border
        border-border
        bg-surface
        p-6
        shadow-soft
        transition-all
        duration-200
        hover:-translate-y-1
      "
    >
      <div className="flex items-start justify-between gap-4">

        <div>
          <span
            className={`
              rounded-full
              px-3
              py-1
              text-xs
              font-medium

              ${projectStatusStyles[
                project.status
              ]}
            `}
          >
            {project.status}
          </span>

          <h3
            className="
              mt-4
              text-xl
              font-bold
            "
          >
            {project.name}
          </h3>

          <p
            className="
              mt-3
              leading-7
              text-muted
            "
          >
            {project.description}
          </p>
        </div>

        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-primaryLight
          "
        >
          <BarChart3 size={22} />
        </div>
      </div>

      {/* PROGRESS */}
      <div className="mt-6">

        <div
          className="
            mb-2
            flex
            items-center
            justify-between
            text-sm
          "
        >
          <span className="text-muted">
            Progress
          </span>

          <span className="font-medium">
            {project.progress}%
          </span>
        </div>

        <div
          className="
            h-2
            overflow-hidden
            rounded-full
            bg-surfaceSecondary
          "
        >
          <div
            style={{
              width: `${project.progress}%`,
            }}
            className="
              h-full
              rounded-full
              bg-primary
            "
          />
        </div>
      </div>

      {/* FOOTER */}
      <div
        className="
          mt-6
          flex
          items-center
          justify-between
        "
      >
        <div className="flex gap-5">

          <div>
            <p className="text-sm text-muted">
              Tasks
            </p>

            <h4 className="font-bold">
              {project.tasks}
            </h4>
          </div>

          <div>
            <p className="text-sm text-muted">
              Members
            </p>

            <h4 className="font-bold">
              {project.members}
            </h4>
          </div>
        </div>

        <div
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-successLight
            px-3
            py-2
            text-sm
            font-semibold
            text-success
          "
        >
          <CheckCircle2 size={16} />

          AI {project.aiScore}%
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;