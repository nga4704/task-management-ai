import {
  CalendarDays,
  Users,
  FolderKanban,
  Plus,
  BarChart3,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import CreateTaskModal from "../common/CreateTaskModal";

import type { ProjectStatus } from "@/features/projects/types/project.types";
import { projectStatusConfig } from "@/features/projects/constants/projectStatus";

type ProjectHeaderProps = {
  projectId: string;
  teamId: string;
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
  teamId,
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
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const statusUI = projectStatusConfig[status];

  return (
    <>
      <section className="rounded-2xl border border-border/50 bg-surface p-5 shadow-sm">
        <div className="flex flex-col xl:flex-row gap-6">

          {/* LEFT */}
          <div className="flex-1 space-y-4">

            {/* TITLE */}
            <div className="space-y-2">
              <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium ${statusUI.className}`}>
                {statusUI.label}
              </span>

              <h1 className="text-2xl font-bold tracking-tight">
                {name}
              </h1>

              <p className="text-sm text-muted line-clamp-2">
                {description}
              </p>
            </div>

            {/* META (compact chips) */}
            <div className="flex flex-wrap gap-2 text-xs">

              <div className="flex items-center gap-1.5 rounded-full bg-muted/10 px-2.5 py-1">
                <FolderKanban size={13} />
                <span className="font-medium">{totalTasks}</span>
                <span className="text-muted">tasks</span>
              </div>

              <div className="flex items-center gap-1.5 rounded-full bg-muted/10 px-2.5 py-1">
                <Users size={13} />
                <span className="font-medium">{totalMembers}</span>
                <span className="text-muted">members</span>
              </div>

              <div className="flex items-center gap-1.5 rounded-full bg-muted/10 px-2.5 py-1">
                <CalendarDays size={13} />
                <span className="text-muted">{dueDate}</span>
              </div>

            </div>

            {/* PROGRESS (thin + clean) */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-[11px] text-muted">
                <span>Progress</span>
                <span className="font-medium text-text">{progress}%</span>
              </div>

              <div className="h-2 rounded-full bg-muted/20 overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

          </div>

          {/* RIGHT ACTIONS (compact stack) */}
          <div className="xl:w-[180px] flex xl:flex-col gap-2">

            <button
              onClick={() => navigate(`/projects/${projectId}/insights`)}
              className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-border bg-white px-3 py-2 text-xs font-medium hover:bg-muted/10 transition"
            >
              <BarChart3 size={14} />
              Analytics
            </button>

            <button
              onClick={onEdit}
              className="flex-1 rounded-lg border border-border bg-white px-3 py-2 text-xs font-medium hover:bg-muted/10 transition"
            >
              Edit
            </button>

            <button
              onClick={onDelete}
              className="flex-1 rounded-lg border border-red-200 bg-red-50 text-red-600 px-3 py-2 text-xs font-medium hover:bg-red-100 transition"
            >
              Delete
            </button>

            <button
              onClick={() => setIsOpen(true)}
              className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-black text-white px-3 py-2 text-xs font-semibold hover:opacity-90 transition"
            >
              <Plus size={14} />
              Task
            </button>

          </div>

        </div>
      </section>

      <CreateTaskModal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        projectId={projectId}
        teamId={teamId}
      />
    </>
  );
}

export default ProjectHeader;