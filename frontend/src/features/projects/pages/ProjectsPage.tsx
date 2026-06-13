import {
  useState,
} from "react";

import MainLayout from "../../../app/layouts/MainLayout";

import ProjectsHeader from "../components/ProjectsHeader";
import ProjectsStats from "../components/ProjectsStats";
import ProjectCard from "../components/ProjectCard";
import CreateProjectModal from "../components/CreateProjectModal";
import ProjectsActivity from "../components/ProjectsActivity";
import ProjectSkeleton from "../components/ProjectSkeleton";

import BoardFilter from "@/shared/components/cards/BoardFilter";
import { useParams } from "react-router-dom";

import { useTeamProjects }
  from "../hooks/useTeamProjects";

import type { Project }
  from "../types/project.types";

function ProjectsPage() {
  const { teamId } = useParams();

  const {
    data: projects,
    isLoading,
  } = useTeamProjects(teamId);

  const [
    isCreateModalOpen,
    setIsCreateModalOpen,
  ] = useState(false);

  // const {
  //   data: projects,
  //   isLoading,
  //   isError,
  // } = useProjects();

  // Optional debug
  // if (isError) {
  //   console.error(
  //     "Failed to load projects"
  //   );
  // }

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
        <ProjectsHeader
          onCreateProject={() =>
            setIsCreateModalOpen(true)
          }
        />

        {/* FILTER */}
        <BoardFilter />

        {/* STATS */}
        <ProjectsStats />

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
            {/* LOADING */}
            {isLoading ? (
              <ProjectSkeleton />
            ) : (
              <div
                className="
                  grid
                  grid-cols-1
                  gap-6

                  lg:grid-cols-2
                "
              >
                {/* EMPTY */}
                {!projects ||
                  projects.length ===
                  0 ? (
                  <div
                    className="
                      col-span-full

                      rounded-3xl
                      border
                      border-dashed
                      border-border

                      bg-surface

                      p-12
                      text-center
                    "
                  >
                    <h3
                      className="
                        text-xl
                        font-semibold
                      "
                    >
                      No projects found
                    </h3>

                    <p
                      className="
                        mt-2
                        text-muted
                      "
                    >
                      Create your first
                      AI-powered
                      project.
                    </p>
                  </div>
                ) : (
                  projects.map(
                    (
                      project: Project
                    ) => (
                      <ProjectCard
                        key={
                          project.id
                        }
                        project={
                          project
                        }
                      />
                    )
                  )
                )}
              </div>
            )}
          </div>

          {/* ACTIVITY */}
          <div
            className="
              col-span-12
              xl:col-span-4
            "
          >
            <ProjectsActivity />
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

export default ProjectsPage;