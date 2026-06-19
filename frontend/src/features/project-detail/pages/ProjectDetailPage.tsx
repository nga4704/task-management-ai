import { useState } from "react";

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

import { useParams } from "react-router-dom";

function ProjectDetailPage() {
  const { projectId } = useParams();

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

  return (
    <MainLayout
      title={project.name}
      description={project.description}
    >
      <div className="space-y-6">
        <ProjectHeader
          projectId={project.id}
          name={project.name}
          description={project.description}
          progress={project.progress}
          status={project.status}
        />

        <ProjectTabs
          activeTab={activeTab}
          onChange={setActiveTab}
        />

        {activeTab === "overview" && (
          <OverviewTab />
        )}

        {activeTab === "board" && (
          <BoardTab />
        )}

        {activeTab === "calendar" && (
          <CalendarTab />
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
    </MainLayout>
  );
}

export default ProjectDetailPage;