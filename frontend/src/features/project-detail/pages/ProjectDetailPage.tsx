import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDeleteProject } from "../hooks/useDeleteProject";

import MainLayout from "@/app/layouts/MainLayout";

import type { ProjectTab } from "../constants/projectTabs";

import { useProjectDetail } from "../hooks/useProjectDetail";

import ProjectHeader from "../components/common/ProjectHeader";
import ProjectTabs from "../components/common/ProjectTabs";

import OverviewTab from "../components/tabs/OverviewTab";
import BoardTab from "../components/tabs/BoardTab";
import CalendarTab from "../components/tabs/CalendarTab";
import TimelineTab from "../components/tabs/TimelineTab";
import MembersTab from "../components/tabs/MembersTab";
import AnalyticsTab from "../components/tabs/AnalyticsTab";
import EditProjectModal
  from "../components/common/EditProjectModal";

import { useParams } from "react-router-dom";

function ProjectDetailPage() {
  const { projectId } = useParams();

  const [
    editOpen,
    setEditOpen,
  ] = useState(false);

  const navigate = useNavigate();
  const { mutate: deleteProject } = useDeleteProject();



  if (!projectId) {
    return (
      <MainLayout
        title="Invalid Project"
        description=""
      >
        Invalid project id
      </MainLayout>
    );
  }

  const { data: project, isLoading } =
    useProjectDetail(projectId);

  const [activeTab, setActiveTab] =
    useState<ProjectTab>("overview");

  if (isLoading) {
    return (
      <MainLayout
        title="Project Detail"
        description="Loading project..."
      >
        <div className="space-y-6 animate-pulse">
          <div className="h-40 rounded-[32px] bg-surface-secondary" />
          <div className="h-12 rounded-2xl bg-surface-secondary" />
          <div className="h-80 rounded-2xl bg-surface-secondary" />
        </div>
      </MainLayout>
    );
  }

  if (!project) {
    return (
      <MainLayout
        title="Project Not Found"
        description="This project does not exist or was deleted"
      >
        <div className="text-muted">
          Project not found.
        </div>
      </MainLayout>
    );
  }

  const handleDelete = () => {
    if (!projectId) return;

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmDelete) return;

    deleteProject(projectId, {
      onSuccess: () => {
        toast.success("Project deleted");

        navigate(`/teams/${project.teamId}/projects`);
      },
      onError: () => {
        toast.error("Delete failed");
      },
    });
  };

  return (
    <MainLayout
      title={project.name}
      description={project.description}
    >
      <div className="space-y-6">
        <ProjectHeader
          projectId={project.id}
          teamId={project.teamId}
          name={project.name}
          description={project.description ?? ""}
          progress={project.progress ?? 0}
          status={project.status}
          totalTasks={project.taskCount ?? 0}
          totalMembers={project.memberCount ?? 0}
          dueDate={
            project.endDate
              ? new Date(project.endDate).toLocaleDateString()
              : "N/A"
          }
          onEdit={() => setEditOpen(true)}
          onDelete={handleDelete}
        />

        <ProjectTabs
          activeTab={activeTab}
          onChange={setActiveTab}
        />

        {activeTab === "overview" && (
          <OverviewTab />
        )}

        {activeTab === "board" && (
          <BoardTab
            scope="project"
            projectId={projectId}
            teamId={project?.teamId}
          />
        )}

        {activeTab === "calendar" && (
          <CalendarTab
            projectId={projectId}
          />
        )}

        {activeTab === "timeline" && (
          <TimelineTab />
        )}

        {activeTab === "members" && (
          <MembersTab />
        )}

        {activeTab === "analytics" && (
          <AnalyticsTab />
        )}
      </div>
      <EditProjectModal
        open={editOpen}
        onClose={() =>
          setEditOpen(false)
        }
        project={project}
      />
    </MainLayout>

  );
}

export default ProjectDetailPage;