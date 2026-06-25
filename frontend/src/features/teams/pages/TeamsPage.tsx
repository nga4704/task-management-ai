import { useState } from "react";
import { Plus, Users } from "lucide-react";

import MainLayout from "@/app/layouts/MainLayout";
import TeamsHeader from "../components/TeamsHeader";
import TeamsGrid from "../components/TeamsGrid";
import CreateTeamModal from "../components/CreateTeamModal";
import { useTeams } from "../hooks/useTeams";

function TeamsPage() {
  const [isOpen, setIsOpen] = useState(false);

  const { data: teams, isLoading } = useTeams();

  const hasTeams = teams && teams.length > 0;

  return (
    <MainLayout
      title="Teams"
      description="Manage team collaboration"
    >
      <div className="space-y-6">

        {/* HEADER (only show when has teams) */}
        {hasTeams && (
          <TeamsHeader
            onCreateTeam={() => setIsOpen(true)}
          />
        )}

        {/* LOADING */}
        {isLoading && (
          <div className="rounded-2xl border border-border bg-surface p-6 text-sm text-muted">
            Loading teams...
          </div>
        )}

        {/* EMPTY STATE (🔥 IMPORTANT) */}
        {!isLoading && !hasTeams && (
          <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-border bg-surface p-16 text-center">
            
            <div className="mb-4 rounded-2xl bg-primary/10 p-4">
              <Users size={28} className="text-primary" />
            </div>

            <h2 className="text-2xl font-bold">
              Create your first team
            </h2>

            <p className="mt-2 max-w-md text-sm text-muted">
              A team is where you collaborate, manage projects, and track tasks with AI assistance.
            </p>

            <button
              onClick={() => setIsOpen(true)}
              className="mt-6 flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 font-semibold text-black shadow-soft hover:scale-[1.02] transition"
            >
              <Plus size={18} />
              Create Team
            </button>
          </div>
        )}

        {/* GRID */}
        {!isLoading && hasTeams && (
          <TeamsGrid teams={teams || []} />
        )}
      </div>

      <CreateTeamModal
        open={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </MainLayout>
  );
}

export default TeamsPage;