import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import MainLayout from "@/app/layouts/MainLayout";

import {
  useWorkspaceStore,
} from "@/store/workspaceStore";

function TeamDetailPage() {

  const { teamId } = useParams();

  const navigate = useNavigate();

  const setSelectedTeam =
    useWorkspaceStore(
      (state) => state.setSelectedTeam
    );

  useEffect(() => {

    if (teamId) {
      setSelectedTeam(teamId);
    }

  }, [teamId]);

  return (
    <MainLayout
      title="Workspace"
      description="Team workspace"
    >
      <div className="grid gap-6 md:grid-cols-3">

        <button
          onClick={() =>
            navigate(
              `/teams/${teamId}/dashboard`
            )
          }
        >
          Dashboard
        </button>

        <button
          onClick={() =>
            navigate(
              `/teams/${teamId}/projects`
            )
          }
        >
          Projects
        </button>

        <button>
          Members
        </button>

      </div>
    </MainLayout>
  );
}

export default TeamDetailPage;