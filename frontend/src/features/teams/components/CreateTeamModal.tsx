import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  ImagePlus,
  Mail,
  X,
} from "lucide-react";

import {
  useCreateTeam,
} from "../hooks/useCreateTeam";
import { useNavigate } from "react-router-dom";

interface Props {
  open: boolean;

  onClose: () => void;
}

function CreateTeamModal({
  open,
  onClose,
}: Props) {
  /*
  -----------------------------------
  FORM STATE
  -----------------------------------
  */

  const [name, setName] =
    useState("");

  const [slug, setSlug] =
    useState("");

  const [
    description,
    setDescription,
  ] = useState("");

  /*
  -----------------------------------
  INVITE MEMBERS
  -----------------------------------
  */

  const [
    inviteEmail,
    setInviteEmail,
  ] = useState("");

  const [
    invitedMembers,
    setInvitedMembers,
  ] = useState<string[]>([]);

  /*
  -----------------------------------
  MUTATION
  -----------------------------------
  */

  const {
    mutate: createTeam,
    isPending,
  } = useCreateTeam();

  /*
  -----------------------------------
  AUTO GENERATE SLUG
  -----------------------------------
  */

  useEffect(() => {
    const generatedSlug =
      name
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(
          /[^a-z0-9-]/g,
          ""
        );

    setSlug(generatedSlug);
  }, [name]);

  /*
  -----------------------------------
  VALIDATION
  -----------------------------------
  */

  const isValid = useMemo(() => {
    if (name.trim().length < 3)
      return false;

    return true;
  }, [name]);

  /*
  -----------------------------------
  RESET FORM
  -----------------------------------
  */

  const resetForm = () => {
    setName("");

    setSlug("");

    setDescription("");

    setInviteEmail("");

    setInvitedMembers([]);
  };

  /*
  -----------------------------------
  ADD MEMBER
  -----------------------------------
  */

  const handleAddMember = () => {
    if (!inviteEmail.trim())
      return;

    const email =
      inviteEmail.trim();

    const alreadyExists =
      invitedMembers.includes(
        email
      );

    if (alreadyExists) return;

    setInvitedMembers((prev) => [
      ...prev,
      email,
    ]);

    setInviteEmail("");
  };

  /*
  -----------------------------------
  REMOVE MEMBER
  -----------------------------------
  */

  const handleRemoveMember = (
    email: string
  ) => {
    setInvitedMembers((prev) =>
      prev.filter(
        (member) =>
          member !== email
      )
    );
  };

  /*
  -----------------------------------
  SUBMIT
  -----------------------------------
  */
const navigate = useNavigate();

const handleSubmit = () => {
  if (!isValid) return;

  createTeam(
    {
      name,
      slug,
      description,
      invitedMembers,
    },
    {
      onSuccess: (response) => {
        resetForm();

        onClose();

        navigate(
          `/teams/${response.team.id}`
        );
      },

      onError: () => {
        alert(
          "Failed to create workspace"
        );
      },
    }
  );
};

  /*
  -----------------------------------
  CLOSE MODAL
  -----------------------------------
  */

  const handleClose = () => {
    if (isPending) return;

    resetForm();

    onClose();
  };

  /*
  -----------------------------------
  RENDER
  -----------------------------------
  */

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="
        fixed
        inset-0
        z-50

        flex
        items-center
        justify-center

        bg-black/50
        backdrop-blur-sm
      "
    >
      <div
        className="
          w-full
          max-w-2xl

          rounded-3xl
          border
          border-border

          bg-surface

          p-8
          shadow-2xl
        "
      >
        {/* HEADER */}
        <div
          className="
            mb-8
            flex
            items-start
            justify-between
          "
        >
          <div>
            <h2
              className="
                text-3xl
                font-bold
              "
            >
              Create Workspace
            </h2>

            <p
              className="
                mt-2
                text-muted
              "
            >
              Set up a collaborative
              workspace for your team
            </p>
          </div>

          <button
            onClick={handleClose}
            disabled={isPending}
            className="
              rounded-xl
              p-2

              transition-colors

              hover:bg-surfaceSecondary

              disabled:opacity-50
            "
          >
            <X size={20} />
          </button>
        </div>

        {/* FORM */}
        <div className="space-y-6">
          {/* AVATAR */}
          <div>
            <label
              className="
                mb-3
                block
                text-sm
                font-medium
              "
            >
              Workspace Avatar
            </label>

            <button
              type="button"
              className="
                flex
                h-24
                w-24
                items-center
                justify-center

                rounded-2xl
                border
                border-dashed
                border-border

                bg-background

                transition-colors

                hover:bg-surfaceSecondary
              "
            >
              <ImagePlus size={28} />
            </button>
          </div>

          {/* WORKSPACE NAME */}
          <div>
            <label
              className="
                mb-2
                block
                text-sm
                font-medium
              "
            >
              Workspace Name
            </label>

            <input
              value={name}
              onChange={(e) =>
                setName(
                  e.target.value
                )
              }
              placeholder="AI Graduation Team"
              className="
                w-full

                rounded-2xl
                border
                border-border

                bg-background

                px-4
                py-3

                outline-none
                transition-all

                focus:border-primary
              "
            />

            {name.length > 0 &&
              name.length < 3 && (
                <p
                  className="
                    mt-2
                    text-sm
                    text-red-500
                  "
                >
                  Workspace name must
                  be at least 3
                  characters
                </p>
              )}
          </div>

          {/* WORKSPACE IDENTIFIER */}
          <div>
            <label
              className="
                mb-2
                block
                text-sm
                font-medium
              "
            >
              Workspace Identifier
            </label>

            <div
              className="
                rounded-2xl
                border
                border-border

                bg-surfaceSecondary

                px-4
                py-3

                text-sm
                text-muted
              "
            >
              {slug || "workspace-id"}
            </div>

            <p
              className="
                mt-2
                text-xs
                text-muted
              "
            >
              Auto-generated from
              workspace name
            </p>
          </div>

          {/* DESCRIPTION */}
          <div>
            <label
              className="
                mb-2
                block
                text-sm
                font-medium
              "
            >
              Description
            </label>

            <textarea
              value={description}
              onChange={(e) =>
                setDescription(
                  e.target.value
                )
              }
              rows={4}
              placeholder="Describe your workspace"
              className="
                w-full
                resize-none

                rounded-2xl
                border
                border-border

                bg-background

                px-4
                py-3

                outline-none
                transition-all

                focus:border-primary
              "
            />
          </div>

          {/* INVITE MEMBERS */}
          <div>
            <label
              className="
                mb-3
                block
                text-sm
                font-medium
              "
            >
              Invite Members
            </label>

            <div
              className="
                flex
                gap-3
              "
            >
              <div className="relative flex-1">
                <Mail
                  size={18}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-muted
                  "
                />

                <input
                  value={inviteEmail}
                  onChange={(e) =>
                    setInviteEmail(
                      e.target.value
                    )
                  }
                  placeholder="member@email.com"
                  className="
                    w-full

                    rounded-2xl
                    border
                    border-border

                    bg-background

                    py-3
                    pl-11
                    pr-4

                    outline-none

                    focus:border-primary
                  "
                />
              </div>

              <button
                type="button"
                onClick={
                  handleAddMember
                }
                className="
                  rounded-2xl
                  border
                  border-border

                  px-5
                  py-3

                  font-medium

                  transition-colors

                  hover:bg-surfaceSecondary
                "
              >
                Add
              </button>
            </div>

            {/* MEMBER LIST */}
            {invitedMembers.length >
              0 && (
              <div
                className="
                  mt-4
                  flex
                  flex-wrap
                  gap-3
                "
              >
                {invitedMembers.map(
                  (email) => (
                    <div
                      key={email}
                      className="
                        flex
                        items-center
                        gap-2

                        rounded-full

                        bg-surfaceSecondary

                        px-4
                        py-2
                      "
                    >
                      <span
                        className="
                          text-sm
                        "
                      >
                        {email}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          handleRemoveMember(
                            email
                          )
                        }
                        className="
                          text-muted
                        "
                      >
                        <X size={14} />
                      </button>
                    </div>
                  )
                )}
              </div>
            )}
          </div>

          {/* ACTIONS */}
          <div
            className="
              flex
              justify-end
              gap-3
              pt-4
            "
          >
            <button
              onClick={handleClose}
              disabled={isPending}
              className="
                rounded-2xl
                border
                border-border

                px-5
                py-3

                font-medium

                transition-opacity

                disabled:opacity-50
              "
            >
              Cancel
            </button>

            <button
              onClick={handleSubmit}
              disabled={
                !isValid ||
                isPending
              }
              className="
                rounded-2xl

                bg-black

                px-6
                py-3

                font-medium
                text-white

                transition-opacity

                disabled:opacity-50
              "
            >
              {isPending
                ? "Creating..."
                : "Create Workspace"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTeamModal;