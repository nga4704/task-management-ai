import MainLayout from "../../../app/layouts/MainLayout";

import WorkspaceHeader from "../components/WorkspaceHeader";

import WorkspaceStats from "../components/WorkspaceStats";

import ProjectCard from "../components/ProjectCard";

import WorkspaceActivity from "../components/WorkspaceActivity";

import {
  mockProjects,
} from "../data/mockWorkspace";

function WorkspacePage() {
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
        <WorkspaceHeader />

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
    </MainLayout>
  );
}

export default WorkspacePage;