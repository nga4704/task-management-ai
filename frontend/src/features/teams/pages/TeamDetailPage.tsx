import { useEffect } from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import MainLayout from "@/app/layouts/MainLayout";

import {
  useWorkspaceStore,
} from "@/store/workspaceStore";

import {
  Users,
  FolderKanban,
  Settings,
} from "lucide-react";

import {
  useTeamDetail,
} from "../hooks/useTeamDetail";

function TeamDetailPage() {
  const { teamId } = useParams();

  const navigate = useNavigate();

  const setSelectedTeam =
    useWorkspaceStore(
      (state) => state.setSelectedTeam
    );

  const {
    data: team,
    isLoading,
    isError,
  } = useTeamDetail(teamId || "");

  useEffect(() => {
    if (teamId) {
      setSelectedTeam(teamId);
    }
  }, [teamId, setSelectedTeam]);

  if (isLoading) {
    return (
      <MainLayout
        title="Workspace"
        description="Loading..."
      >
        <div>
          Loading workspace...
        </div>
      </MainLayout>
    );
  }

  if (isError || !team) {
    return (
      <MainLayout
        title="Workspace"
        description="Error"
      >
        <div>
          Workspace not found
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout
      title={team.name}
      description={
        team.description ||
        "Team workspace"
      }
    >
      <div className="space-y-8">

        {/* TEAM INFO */}
        <div
          className="
            rounded-3xl
            border
            border-border
            bg-surface
            p-6
          "
        >
          <h2
            className="
              text-2xl
              font-bold
            "
          >
            {team.name}
          </h2>

          <p
            className="
              mt-2
              text-muted
            "
          >
            {team.description ||
              "No description"}
          </p>

          <div
            className="
              mt-4
              flex
              flex-wrap
              gap-4
              text-sm
            "
          >
            <span>
              Slug:
              {" "}
              <strong>
                {team.slug}
              </strong>
            </span>

            <span>
              Members:
              {" "}
              <strong>
                {team.team_members
                  ?.length || 0}
              </strong>
            </span>
          </div>
        </div>

        {/* QUICK ACTIONS */}
        <div
          className="
            grid
            gap-4
            md:grid-cols-3
          "
        >
          <button
            onClick={() =>
              navigate(
                `/teams/${team.id}/projects`
              )
            }
            className="
              rounded-3xl
              border
              border-border
              bg-surface
              p-6
              text-left
            "
          >
            <FolderKanban
              size={28}
            />

            <h3
              className="
                mt-4
                text-lg
                font-semibold
              "
            >
              Projects
            </h3>

            <p
              className="
                text-sm
                text-muted
              "
            >
              Manage team projects
            </p>
          </button>

          <button
            className="
              rounded-3xl
              border
              border-border
              bg-surface
              p-6
              text-left
            "
          >
            <Users size={28} />

            <h3
              className="
                mt-4
                text-lg
                font-semibold
              "
            >
              Members
            </h3>

            <p
              className="
                text-sm
                text-muted
              "
            >
              Team members
            </p>
          </button>

          <button
            className="
              rounded-3xl
              border
              border-border
              bg-surface
              p-6
              text-left
            "
          >
            <Settings
              size={28}
            />

            <h3
              className="
                mt-4
                text-lg
                font-semibold
              "
            >
              Settings
            </h3>

            <p
              className="
                text-sm
                text-muted
              "
            >
              Workspace settings
            </p>
          </button>
        </div>

        {/* MEMBERS */}
        <div
          className="
            rounded-3xl
            border
            border-border
            bg-surface
            p-6
          "
        >
          <h3
            className="
              mb-4
              text-xl
              font-semibold
            "
          >
            Team Members
          </h3>

          <div className="space-y-3">
            {team.team_members?.map(
              (member) => (
                <div
                  key={member.id}
                  className="
                    flex
                    items-center
                    justify-between

                    rounded-2xl
                    border
                    border-border

                    p-4
                  "
                >
                  <div>
                    <p
                      className="
                        font-medium
                      "
                    >
                      {member.users
                        ?.full_name ||
                        member.users
                          ?.email}
                    </p>

                    <p
                      className="
                        text-sm
                        text-muted
                      "
                    >
                      {
                        member.users
                          ?.email
                      }
                    </p>
                  </div>

                  <span
                    className="
                      rounded-full
                      bg-surfaceSecondary
                      px-3
                      py-1
                      text-xs
                    "
                  >
                    {member.role}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default TeamDetailPage;