import {
  Trash2,
} from "lucide-react";

import type {
  TeamMember,
} from "../types/team.types";
import { useState } from "react";
import ConfirmDialog from "@/shared/components/common/ConfirmDialog";
interface Props {
  members: TeamMember[];

  onRemove: (
    userId: string
  ) => void;

  isOwner: boolean;
}

function TeamMembers({ members, onRemove, isOwner }: Props) {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      {members.map((member) => (
        <div
          key={member.id}
          className="flex items-center justify-between rounded-2xl border p-4"
        >
          <div>
            <p className="font-medium">
              {member.users.full_name || member.users.username}
            </p>
            <p className="text-sm text-muted">
              {member.users.email}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="rounded-full bg-surfaceSecondary px-3 py-1 text-xs">
              {member.role === "owner" ? "Owner" : "Member"}
            </span>

            {isOwner && member.role !== "owner" && (
              <button
                onClick={() => setSelectedUserId(member.users.id)}
              >
                <Trash2 size={18} />
              </button>
            )}
          </div>
        </div>
      ))}

      {/* CONFIRM MODAL */}
      <ConfirmDialog
        open={!!selectedUserId}
        title="Remove member?"
        description="This action cannot be undone."
        onCancel={() => setSelectedUserId(null)}
        onConfirm={() => {
          if (selectedUserId) {
            onRemove(selectedUserId);
          }
          setSelectedUserId(null);
        }}
      />
    </div>
  );
}

export default TeamMembers;