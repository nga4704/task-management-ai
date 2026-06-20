import { useEffect } from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import MainLayout from "@/app/layouts/MainLayout";

import {
  useTeamStore,
} from "@/store/teamStore";

import {
  Users,
  FolderKanban,
  Settings,
  Trash2,
} from "lucide-react";

import {
  useTeamDetail,
} from "../hooks/useTeamDetail";

import InviteMemberForm from "../components/InviteMemberForm";

import {
  useAddMember,
} from "../hooks/useAddMember";

import {
  useRemoveMember,
} from "../hooks/useRemoveMember";

import TeamMembers from "../components/TeamMembers";

import TeamSettings
  from "../components/TeamSettings";

import { useAuthStore } from "@/store/authStore";

function TeamDetailPage() {
  const currentUser =
    useAuthStore(
      (state) => state.user
    );

  const { teamId } = useParams();

  const navigate = useNavigate();

  const setSelectedTeam =
    useTeamStore(
      (state) => state.setSelectedTeam
    );

  const {
    data: team,
    isLoading,
    isError,
  } = useTeamDetail(teamId || "");

  const addMemberMutation =
    useAddMember(
      teamId || ""
    );

  const removeMemberMutation =
    useRemoveMember(
      teamId || ""
    );

  const isOwner =
    currentUser?.id ===
    team?.owner_id;

  useEffect(() => {
    if (
      teamId &&
      team?.name
    ) {
      setSelectedTeam(
        teamId,
        team.name
      );
    }
  }, [
    teamId,
    team?.name,
    setSelectedTeam,
  ]);

  const handleInviteMember =
    (email: string) => {

      addMemberMutation.mutate(
        email,
        {
          onSuccess: () => {
            alert(
              "Member added successfully"
            );
          },

          onError: (error: any) => {
            alert(
              error?.response?.data?.message ||
              "Failed to add member"
            );
          },
        }
      );
    };

  const handleRemoveMember =
    (userId: string) => {

      const confirmed =
        window.confirm(
          "Remove member?"
        );

      if (!confirmed) {
        return;
      }

      removeMemberMutation.mutate(
        userId,
        {
          onError: (
            error: any
          ) => {
            alert(
              error?.response?.data?.message ||
              "Failed to remove member"
            );
          },
        }
      );
    };

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

          {isOwner && (
            <div className="mb-6">
              <InviteMemberForm
                onInvite={
                  handleInviteMember
                }
              />
            </div>
          )}

          <div className="space-y-3">
            <TeamMembers
              members={team.team_members}
              onRemove={handleRemoveMember}
              isOwner={isOwner}
            />
          </div>
        </div>

        {/* SETTINGS */}
        {isOwner && (
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
              Workspace Settings
            </h3>

            <TeamSettings
              team={team}
            />
          </div>
        )}
      </div>
    </MainLayout>
  );
}

export default TeamDetailPage;