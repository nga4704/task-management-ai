// features/projects/modals/MembersModal.tsx

import InviteMemberForm from "@/features/teams/components/InviteMemberForm";
import TeamMembers from "@/features/teams/components/TeamMembers";

import { useTeamDetail } from "@/features/teams/hooks/useTeamDetail";
import { useAddMember } from "@/features/teams/hooks/useAddMember";
import { useRemoveMember } from "@/features/teams/hooks/useRemoveMember";

interface Props {
  teamId: string;
  onClose: () => void;
}

function MembersModal({ teamId, onClose }: Props) {
  const { data: team } = useTeamDetail(teamId);

  const addMember = useAddMember(teamId);
  const removeMember = useRemoveMember(teamId);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

      <div className="w-[520px] bg-white rounded-2xl p-6">

        <h2 className="text-xl font-bold mb-4">
          Team Members
        </h2>

        <InviteMemberForm
          onInvite={(email) => addMember.mutate(email)}
        />

        <div className="mt-5 space-y-3">
          <TeamMembers
            members={team?.team_members || []}
            onRemove={(id) => removeMember.mutate(id)}
            isOwner={true}
          />
        </div>

        <button
          onClick={onClose}
          className="mt-6 text-sm text-gray-500"
        >
          Close
        </button>

      </div>

    </div>
  );
}

export default MembersModal;