import {
  CalendarDays,
  Users,
  FolderKanban,
  Plus,
  BarChart3,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

import {
  useState,
} from "react";

import CreateTaskModal from "../common/CreateTaskModal";

import type {
  ProjectStatus,
} from "@/features/projects/types/project.types";

import {
  projectStatusConfig,
} from "@/features/projects/constants/projectStatus";

type ProjectHeaderProps = {
  projectId: string;

  name: string;
  description: string;

  progress: number;
  status: ProjectStatus;

  totalTasks?: number;
  totalMembers?: number;

  dueDate?: string;

  onEdit: () => void;
  onDelete: () => void;
};

function ProjectHeader({
  projectId,

  name,
  description,

  progress,
  status,

  totalTasks = 0,
  totalMembers = 0,

  dueDate = "N/A",

  onEdit,
  onDelete,

}: ProjectHeaderProps) {
  const navigate =
    useNavigate();

  const [
    isOpen,
    setIsOpen,
  ] = useState(false);

  return (
    <>
      <section
        className="
          rounded-[32px]
          border
          border-border/60
          bg-white/70
          backdrop-blur-md

          p-6
          md:p-8

          shadow-soft
        "
      >
        <div
          className="
            flex
            flex-col
            gap-8

            xl:flex-row
            xl:items-start
            xl:justify-between
          "
        >
          {/* LEFT */}
          <div className="flex-1">
            {/* STATUS */}
            <div
              className={`
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  px-3
                  py-1.5
                  text-xs
                  font-semibold
                  ${projectStatusConfig[status].className}
                `}
            >
              {projectStatusConfig[status].label}
            </div>

            {/* TITLE */}
            <h1
              className="
                mt-4

                text-3xl
                md:text-4xl

                font-bold
                tracking-tight
              "
            >
              {name}
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-3
                max-w-2xl

                leading-7
                text-muted
              "
            >
              {description}
            </p>

            {/* PROJECT META */}
            <div
              className="
                mt-6

                flex
                flex-wrap
                items-center
                gap-5

                text-sm
                text-muted
              "
            >
              <div className="flex items-center gap-2">
                <FolderKanban size={18} />
                <span>
                  {totalTasks} Tasks
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Users size={18} />
                <span>
                  {totalMembers} Members
                </span>
              </div>

              <div className="flex items-center gap-2">
                <CalendarDays size={18} />
                <span>
                  {dueDate}
                </span>
              </div>
            </div>

            {/* PROGRESS */}
            <div className="mt-8">
              <div
                className="
                  mb-2

                  flex
                  items-center
                  justify-between

                  text-sm
                  font-medium
                "
              >
                <span>
                  Project Progress
                </span>

                <span>
                  {progress}%
                </span>
              </div>

              <div
                className="
                  h-3
                  overflow-hidden

                  rounded-full

                  bg-surface-secondary
                "
              >
                <div
                  className="
                    h-full
                    rounded-full
                    bg-primary
                    transition-all
                  "
                  style={{
                    width: `${progress}%`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="
              flex
              flex-col
              gap-4

              xl:min-w-[220px]
            "
          >
            <button
              onClick={() =>
                navigate(
                  `/projects/${projectId}/insights`
                )
              }
              className="
                flex
                items-center
                justify-center
                gap-2

                rounded-2xl

                border
                border-border

                bg-white

                px-5
                py-3

                font-medium

                transition-all
                hover:shadow-soft
              "
            >
              <BarChart3 size={18} />

              Analytics
            </button>
            
            <button
              onClick={onEdit}
              className="
                flex
                items-center
                justify-center
                gap-2

                rounded-2xl

                border
                border-border

                bg-white

                px-5
                py-3

                font-medium
              "
            >
              Edit Project
            </button>

            <button
              onClick={onDelete}
              className="
                flex
                items-center
                justify-center
                gap-2

                rounded-2xl
                border
                border-red-200

                bg-red-50
                text-red-600

                px-5
                py-3

                font-medium

                hover:bg-red-100
              "
            >
              Delete Project
            </button>

            <button
              onClick={() =>
                setIsOpen(true)
              }
              className="
                flex
                items-center
                justify-center
                gap-2

                rounded-2xl

                bg-black
                text-white

                px-5
                py-3

                font-semibold

                transition-all
                hover:opacity-90
              "
            >
              <Plus size={18} />

              Create Task
            </button>
          </div>
        </div>
      </section>

      <CreateTaskModal
        open={isOpen}
        onClose={() =>
          setIsOpen(false)
        }
      />
    </>
  );
}

export default ProjectHeader;