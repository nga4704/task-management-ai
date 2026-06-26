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
      <section className="rounded-3xl border border-border/60 bg-surface p-6 md:p-8 shadow-soft">
        
        <div className="flex flex-col xl:flex-row gap-8">

          {/* LEFT CONTENT */}
          <div className="flex-1 space-y-6">

            {/* HEADER */}
            <div className="space-y-2">
              <span className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium ${statusUI.className}`}>
                {statusUI.label}
              </span>

              <h1 className="text-3xl font-bold tracking-tight">
                {name}
              </h1>

              <p className="text-sm text-muted max-w-2xl leading-6">
                {description}
              </p>
            </div>

            {/* META - CHIP STYLE */}
            <div className="flex flex-wrap gap-2 text-sm">

              <div className="flex items-center gap-2 rounded-full bg-muted/10 px-3 py-1.5">
                <FolderKanban size={14} />
                <span className="font-medium">{totalTasks}</span>
                <span className="text-muted">tasks</span>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-muted/10 px-3 py-1.5">
                <Users size={14} />
                <span className="font-medium">{totalMembers}</span>
                <span className="text-muted">members</span>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-muted/10 px-3 py-1.5">
                <CalendarDays size={14} />
                <span className="text-muted">{dueDate}</span>
              </div>

            </div>

            {/* PROGRESS */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-muted">
                <span>Progress</span>
                <span className="text-text font-medium">{progress}%</span>
              </div>

              <div className="h-2.5 rounded-full bg-muted/20 overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

          </div>

          {/* RIGHT ACTION PANEL */}
          <div className="xl:w-[220px] space-y-3">

            <button
              onClick={() => navigate(`/projects/${projectId}/insights`)}
              className="w-full flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-4 py-2.5 text-sm font-medium hover:shadow-soft transition"
            >
              <BarChart3 size={16} />
              Analytics
            </button>

            <button
              onClick={onEdit}
              className="w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm font-medium hover:bg-muted/10 transition"
            >
              Edit Project
            </button>

            <button
              onClick={onDelete}
              className="w-full rounded-xl border border-red-200 bg-red-50 text-red-600 px-4 py-2.5 text-sm font-medium hover:bg-red-100 transition"
            >
              Delete
            </button>

            <button
              onClick={() => setIsOpen(true)}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-black text-white px-4 py-2.5 text-sm font-semibold hover:opacity-90 transition"
            >
              <Plus size={16} />
              Create Task
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