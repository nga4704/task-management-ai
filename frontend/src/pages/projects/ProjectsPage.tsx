import MainLayout from "../../layouts/MainLayout";

import ProjectsHeader from "../../components/projects/ProjectsHeader";
import ProjectStatsCard from "../../components/projects/ProjectStatsCard";
import ProjectFilter from "../../components/projects/ProjectFilter";
import ProjectGridCard from "../../components/projects/ProjectGridCard";

function ProjectsPage() {
  return (
    <MainLayout>
      <div className="space-y-6">

        <ProjectsHeader />

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <ProjectStatsCard
            title="Total Projects"
            value="24"
          />

          <ProjectStatsCard
            title="Active"
            value="12"
          />

          <ProjectStatsCard
            title="Completed"
            value="8"
          />

          <ProjectStatsCard
            title="Delayed"
            value="4"
          />
        </div>

        <ProjectFilter />

        {/* Projects Grid */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-6
          "
        >
          <ProjectGridCard
            title="AI Task Management"
            description="
            Build an intelligent productivity system
            using AI prediction and smart scheduling.
            "
            progress={78}
          />

          <ProjectGridCard
            title="Mobile Workspace App"
            description="
            Develop a collaborative mobile workspace
            for project teams.
            "
            progress={52}
          />

          <ProjectGridCard
            title="Analytics Dashboard"
            description="
            Create visual analytics and reporting
            modules for managers.
            "
            progress={91}
          />
        </div>

      </div>
    </MainLayout>
  );
}

export default ProjectsPage;