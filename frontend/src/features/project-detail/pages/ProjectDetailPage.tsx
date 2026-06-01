import { useState } from "react";

import MainLayout from "@/app/layouts/MainLayout";

import type {
  ProjectTab,
} from "../constants/projectTabs";

import {
  useProjectDetail,
} from "../hooks/useProjectDetail";

import ProjectHeader from "../components/common/ProjectHeader";
import ProjectTabs from "../components/common/ProjectTabs";

import OverviewTab from "../components/tabs/OverviewTab";
import BoardTab from "../components/tabs/BoardTab";
import CalendarTab from "../components/tabs/CalendarTab";
import TimelineTab from "../components/tabs/TimelineTab";
import MembersTab from "../components/tabs/MembersTab";
import AnalyticsTab from "../components/tabs/AnalyticsTab";

function ProjectDetailPage() {
  const { project } =
    useProjectDetail();

  const [activeTab, setActiveTab] =
    useState<ProjectTab>(
      "overview"
    );

  if (!project) return null;

  return (
    <MainLayout
      title="Project Detail"
      description="Manage project progress and team collaboration"
    >
      <div className="space-y-6">
        <ProjectHeader
          name={project.name}
          description={
            project.description
          }
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