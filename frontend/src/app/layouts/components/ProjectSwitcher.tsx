import { useState } from "react";

import {
  ChevronDown,
  FolderKanban,
} from "lucide-react";

import {
  useProjectStore,
} from "@/store/projectStore";

const mockProjects = [
  {
    id: "project-001",
    name: "AI Productivity Platform",
  },
  {
    id: "project-002",
    name: "Mobile Banking System",
  },
  {
    id: "project-003",
    name: "E-Commerce Dashboard",
  },
];

function ProjectSwitcher() {
  const [open, setOpen] =
    useState(false);

  const {
    selectedProjectId,
    selectedProjectName,
    setSelectedProject,
  } = useProjectStore();

  const currentProject =
    selectedProjectName ??
    "Select Project";

  return (
    <div className="relative mt-4">

      <p
        className="
          mb-2
          px-1
          text-xs
          font-semibold
          uppercase
          tracking-wider
          text-muted
        "
      >
        Current Project
      </p>

      <button
        onClick={() =>
          setOpen(!open)
        }
        className="
          flex
          w-full
          items-center
          justify-between

          rounded-2xl
          border
          border-border

          bg-surface

          px-4
          py-3

          shadow-soft
        "
      >
        <div
          className="
            flex
            items-center
            gap-3
          "
        >
          <FolderKanban
            size={18}
          />

          <span
            className="
              truncate
              text-sm
              font-medium
            "
          >
            {currentProject}
          </span>
        </div>

        <ChevronDown
          size={16}
        />
      </button>

      {open && (
        <div
          className="
            absolute
            z-50
            mt-2
            w-full

            overflow-hidden

            rounded-2xl
            border
            border-border

            bg-white

            shadow-xl
          "
        >
          {mockProjects.map(
            (project) => (
              <button
                key={project.id}
                onClick={() => {

                  setSelectedProject(
                    project.id,
                    project.name
                  );

                  setOpen(false);
                }}
                className={`
                  flex
                  w-full
                  items-center
                  justify-between

                  px-4
                  py-3

                  text-left
                  text-sm

                  hover:bg-surfaceSecondary

                  ${
                    selectedProjectId ===
                    project.id
                      ? "bg-primaryLight"
                      : ""
                  }
                `}
              >
                {project.name}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default ProjectSwitcher;