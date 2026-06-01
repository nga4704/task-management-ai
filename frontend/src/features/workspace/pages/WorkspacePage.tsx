import MainLayout from "../../../app/layouts/MainLayout";

import WorkspaceHeader from "../components/WorkspaceHeader";

import WorkspaceStats from "../components/WorkspaceStats";

import ProjectCard from "../components/ProjectCard";

import CreateProjectModal from "../components/CreateProjectModal";

import WorkspaceActivity from "../components/WorkspaceActivity";
import BoardFilter from "@/shared/components/cards/BoardFilter";

import {
  mockProjects,
} from "../data/mockWorkspace";
import {
  useState,
} from "react";

function WorkspacePage() {

  const [
    isCreateModalOpen,
    setIsCreateModalOpen,
  ] = useState(false);

  return (
    <MainLayout
      title="Workspace"
      description="
        AI-powered team collaboration
        and project management
      "
    >
      <div className="space-y-6">

        {/* HERO */}
        <WorkspaceHeader
          onCreateProject={() =>
            setIsCreateModalOpen(true)
          }
        />

        {/* FILTER */}
        <BoardFilter />

        {/* STATS */}
        <WorkspaceStats />

        {/* CONTENT */}
        <section
          className="
            grid
            grid-cols-12
            gap-6
          "
        >
          {/* PROJECTS */}
          <div
            className="
              col-span-12
              xl:col-span-8
            "
          >
            <div
              className="
                grid
                grid-cols-1
                gap-6
                lg:grid-cols-2
              "
            >
              {mockProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              ))}
            </div>
          </div>

          {/* ACTIVITY */}
          <div
            className="
              col-span-12
              xl:col-span-4
            "
          >
            <WorkspaceActivity />
          </div>

        </section>
      </div>
      <CreateProjectModal
        open={isCreateModalOpen}
        onClose={() =>
          setIsCreateModalOpen(false)
        }
      />
    </MainLayout>

  );
}

export default WorkspacePage;