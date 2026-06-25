// features/projects/modals/SettingsModal.tsx

import { useState } from "react";

import { useUpdateTeam } from "@/features/teams/hooks/useUpdateTeam";
import { useDeleteTeam } from "@/features/teams/hooks/useDeleteTeam";

import type { TeamDetail } from "@/features/teams/types/team.types";

interface Props {
  team?: TeamDetail;
  onClose: () => void;
}

function SettingsModal({ team, onClose }: Props) {
  const update = useUpdateTeam(team?.id || "");
  const remove = useDeleteTeam();

  const [name, setName] = useState(team?.name || "");
  const [description, setDescription] = useState(team?.description || "");

  if (!team) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

      <div className="w-[520px] bg-white rounded-2xl p-6">

        <h2 className="text-xl font-bold mb-4">
          Workspace Settings
        </h2>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-3 rounded-xl"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-3 rounded-xl mt-3"
        />

        <div className="flex gap-3 mt-5">

          <button
            onClick={() =>
              update.mutate({ name, description })
            }
            className="px-4 py-2 bg-black text-white rounded-xl"
          >
            Save
          </button>

          <button
            onClick={() => {
              remove.mutate(team.id);
              onClose();
            }}
            className="px-4 py-2 bg-red-600 text-white rounded-xl"
          >
            Delete
          </button>

        </div>

        <button
          onClick={onClose}
          className="mt-5 text-sm text-gray-500"
        >
          Close
        </button>

      </div>

    </div>
  );
}

export default SettingsModal;