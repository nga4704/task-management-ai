// features/projects/pages/ProjectsPage.tsx

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import MainLayout from "@/app/layouts/MainLayout";

import { Users, Settings } from "lucide-react";

import ProjectsHeader from "../components/ProjectsHeader";
import ProjectsStats from "../components/ProjectsStats";
import ProjectCard from "../components/ProjectCard";
import CreateProjectModal from "../components/CreateProjectModal";
import ProjectsActivity from "../components/ProjectsActivity";
import ProjectSkeleton from "../components/ProjectSkeleton";

import BoardFilter from "@/shared/components/cards/BoardFilter";

import { useTeamProjects } from "../hooks/useTeamProjects";
import { useTeamDetail } from "@/features/teams/hooks/useTeamDetail";
import { useTeams } from "@/features/teams/hooks/useTeams";

import MembersModal from "@/features/teams/components/MembersModal";
import SettingsModal from "@/features/teams/components/TeamSettingsModal";

function ProjectsPage() {
  const { teamId } = useParams();
  const navigate = useNavigate();

  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [openMembers, setOpenMembers] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);

  const { data: teams } = useTeams();
  const { data: team } = useTeamDetail(teamId || "");
  const { data: projects, isLoading } = useTeamProjects(teamId);

  useEffect(() => {
    if (teams && teams.length === 0) {
      navigate("/teams");
    }
  }, [teams, navigate]);

  return (
    <MainLayout
      title={team?.name || "Workspace"}
      description={team?.description || "AI-powered workspace"}
    >
      <div className="space-y-6">

        {/* WORKSPACE HEADER */}
        <div className="rounded-3xl border bg-surface p-6 flex items-center justify-between">

          <div>
            <h2 className="text-2xl font-bold">
              {team?.name || "Select team"}
            </h2>
            <p className="text-sm text-muted">
              {team?.description || "Choose workspace"}
            </p>
          </div>

          <div className="flex gap-3">

            <button
              onClick={() => setOpenMembers(true)}
              className="flex items-center gap-2 rounded-xl border px-4 py-2"
            >
              <Users size={16} />
              Members
            </button>

            <button
              onClick={() => setOpenSettings(true)}
              className="flex items-center gap-2 rounded-xl border px-4 py-2"
            >
              <Settings size={16} />
              Settings
            </button>

            <button
              onClick={() => navigate("/teams")}
              className="rounded-xl border px-4 py-2"
            >
              Switch
            </button>

          </div>

        </div>

        {/* HEADER */}
        <ProjectsHeader
          onCreateProject={() => setIsCreateOpen(true)}
        />

        <BoardFilter />
        <ProjectsStats />

        {/* MAIN */}
        <section className="grid grid-cols-12 gap-6">

          {/* PROJECT LIST */}
          <div className="col-span-12 xl:col-span-8">

            {isLoading ? (
              <ProjectSkeleton />
            ) : !projects?.length ? (
              <div className="rounded-3xl border border-dashed p-10 text-center">
                <h3 className="text-xl font-semibold">
                  No projects yet
                </h3>

                <button
                  onClick={() => setIsCreateOpen(true)}
                  className="mt-4 rounded-xl bg-black px-4 py-2 text-white"
                >
                  Create Project
                </button>
              </div>
            ) : (
              <div className="grid lg:grid-cols-2 gap-6">
                {projects.map((project: any) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            )}

          </div>

          {/* ACTIVITY */}
          <div className="col-span-12 xl:col-span-4">
            <ProjectsActivity />
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