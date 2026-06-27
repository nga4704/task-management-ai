// features/projects/pages/ProjectsPage.tsx

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import MainLayout from "@/app/layouts/MainLayout";

import ProjectsStats from "../components/ProjectsStats";
import ProjectCard from "../components/ProjectCard";
import CreateProjectModal from "../components/CreateProjectModal";
import ProjectSkeleton from "../components/ProjectSkeleton";

import BoardFilter from "@/shared/components/cards/BoardFilter";

import { useTeamProjects } from "../hooks/useTeamProjects";
import { useTeamDetail } from "@/features/teams/hooks/useTeamDetail";
import { useTeams } from "@/features/teams/hooks/useTeams";

import MembersModal from "@/features/teams/components/MembersModal";
import SettingsModal from "@/features/teams/components/TeamSettingsModal";
import WorkspaceHeader from "../components/WorkspaceHeader";

import { useTeamStore } from "@/store/teamStore";

function ProjectsPage() {
  const { teamId } = useParams();
  const navigate = useNavigate();

  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [openMembers, setOpenMembers] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);

  const { data: teams } = useTeams();
  const { data: team } = useTeamDetail(teamId || "");
  const { data: projects, isLoading } = useTeamProjects(teamId);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "high" | "ai">("all");

  const setSelectedTeam =
    useTeamStore(
      (s) => s.setSelectedTeam
    );

  const filteredProjects = projects?.filter((p: any) => {
    const matchSearch =
      p.name?.toLowerCase().includes(search.toLowerCase());

    const matchFilter =
      filter === "all"
        ? true
        : filter === "high"
          ? p.priority === "high"
          : filter === "ai"
            ? p.is_ai_suggested
            : true;

    return matchSearch && matchFilter;
  });

  useEffect(() => {
    if (team?.id && team?.name) {
      setSelectedTeam(team.id, team.name);
    }
  }, [team, setSelectedTeam]);

  return (
    <MainLayout
      title={team?.name || "Workspace"}
      description={team?.description || "AI-powered workspace"}
    >
      <div className="space-y-6">



        <WorkspaceHeader
          team={team}
          onCreateProject={() => setIsCreateOpen(true)}
          onOpenMembers={() => setOpenMembers(true)}
          onOpenSettings={() => setOpenSettings(true)}
        />

        <ProjectsStats teamId={teamId} />

        <BoardFilter
          search={search}
          onSearchChange={setSearch}
          filter={filter}
          onFilterChange={setFilter}
        />



        {/* MAIN */}
        <section className="grid grid-cols-12 gap-6">

          {/* PROJECT LIST */}
          <div className="col-span-12">

            {isLoading ? (
              <ProjectSkeleton />
            ) : !projects?.length ? (
              <div className="rounded-3xl border border-dashed p-10 text-center">
                <h3 className="text-xl font-semibold">
                  No projects yet
                </h3>

                {/* <button
                  onClick={() => setIsCreateOpen(true)}
                  className="mt-4 rounded-xl bg-black px-4 py-2 text-white"
                >
                  Create Project
                </button> */}
              </div>
            ) : (
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProjects?.map((project: any) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            )}

          </div>

        </section>
      </div>

      {/* MODALS */}
      <CreateProjectModal
        open={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
      />

      {openMembers && (
        <MembersModal
          teamId={teamId!}
          onClose={() => setOpenMembers(false)}
        />
      )}

      {openSettings && (
        <SettingsModal
          team={team}
          onClose={() => setOpenSettings(false)}
        />
      )}

    </MainLayout>
  );
}

export default ProjectsPage;