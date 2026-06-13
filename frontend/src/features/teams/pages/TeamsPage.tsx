import { useState } from "react";

import MainLayout from "@/app/layouts/MainLayout";

import TeamsHeader from "../components/TeamsHeader";
import TeamsGrid from "../components/TeamsGrid";
import CreateTeamModal from "../components/CreateTeamModal";

import { useTeams } from "../hooks/useTeams";

function TeamsPage() {
  const [isOpen, setIsOpen] =
    useState(false);

  const {
    data: teams,
    isLoading,
  } = useTeams();

  return (
    <MainLayout
      title="Teams"
      description="Manage team collaboration"
    >
      <div className="space-y-6">
        <TeamsHeader
          onCreateTeam={() =>
            setIsOpen(true)
          }
        />

        {isLoading ? (
          <div>Loading teams...</div>
        ) : (
          <TeamsGrid
            teams={teams || []}
          />
        )}
      </div>

      <CreateTeamModal
        open={isOpen}
        onClose={() =>
          setIsOpen(false)
        }
      />
    </MainLayout>
  );
}

export default TeamsPage;