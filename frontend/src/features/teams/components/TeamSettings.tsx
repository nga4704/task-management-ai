import {
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  useUpdateTeam,
} from "../hooks/useUpdateTeam";

import {
  useDeleteTeam,
} from "../hooks/useDeleteTeam";

import type {
  TeamDetail,
} from "../types/team.types";

interface Props {
  team: TeamDetail;
}

function TeamSettings({
  team,
}: Props) {

  const navigate =
    useNavigate();

  const [name,
    setName]
    = useState(
      team.name
    );

  const [
    description,
    setDescription,
  ] = useState(
    team.description || ""
  );

  const updateMutation =
    useUpdateTeam(
      team.id
    );

  const deleteMutation =
    useDeleteTeam();

  const handleUpdate =
    () => {

      updateMutation.mutate(
        {
          name,
          description,
        },
        {
          onSuccess: () => {
            alert(
              "Updated successfully"
            );
          },

          onError: (error: any) => {
            alert(
              error?.response?.data
                ?.message ||
              "Failed to update"
            );
          },
        }
      );
    };

  const handleDelete =
    () => {

      const confirmed =
        window.confirm(
          "Delete workspace?"
        );

      if (!confirmed)
        return;

      deleteMutation.mutate(
        team.id,
        {
          onSuccess: () => {

            navigate(
              "/teams"
            );
          },
        }
      );
    };

  return (
    <div
      className="
        space-y-6
      "
    >
      <div>
        <label>
          Workspace Name
        </label>

        <input
          value={name}
          onChange={(e) =>
            setName(
              e.target.value
            )
          }
          className="
            mt-2
            w-full
            rounded-xl
            border
            px-4
            py-3
          "
        />
      </div>

      <div>
        <label>
          Description
        </label>

        <textarea
          rows={4}
          value={description}
          onChange={(e) =>
            setDescription(
              e.target.value
            )
          }
          className="
            mt-2
            w-full
            rounded-xl
            border
            px-4
            py-3
          "
        />
      </div>

      <div
        className="
          flex
          gap-3
        "
      >
        <button
          onClick={
            handleUpdate
          }
          className="
            rounded-xl
            bg-black
            px-5
            py-3
            text-white
          "
        >
          Save Changes
        </button>

        <button
          onClick={
            handleDelete
          }
          className="
            rounded-xl
            bg-red-600
            px-5
            py-3
            text-white
          "
        >
          Delete Team
        </button>
      </div>
    </div>
  );
}

export default TeamSettings;