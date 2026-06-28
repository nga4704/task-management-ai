import {
  X,
} from "lucide-react";

import { useState } from "react";

import type {
  ProjectStatus,
} from "../types/project.types";
import {
  useCreateProject,
} from "../hooks/useCreateProject";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

import { useQueryClient } from "@tanstack/react-query";

interface Props {
  open: boolean;
  onClose: () => void;
}

function CreateProjectModal({
  open,
  onClose,
}: Props) {

  const queryClient = useQueryClient();

  const { teamId } = useParams();

  const [name, setName] =
    useState("");

  const [
    description,
    setDescription,
  ] = useState("");

  const [status, setStatus] =
    useState<ProjectStatus>(
      "PLANNING"
    );

  const [
    startDate,
    setStartDate,
  ] = useState("");

  const [endDate, setEndDate] =
    useState("");

 
  const {
    mutate: createProject,
    isPending,
  } = useCreateProject();

  if (!open) {
    return null;
  }

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!teamId) {
      toast.error("Missing team context");
      return;
    }

    createProject(
      {
        name,
        description,
        teamId,
        status,
        startDate: startDate ? new Date(startDate).toISOString() : undefined,
        endDate: endDate ? new Date(endDate).toISOString() : undefined,
      },
      {
        onSuccess: () => {
          toast.success("Project created successfully");

          queryClient.invalidateQueries({
            queryKey: ["team-projects", teamId],
          });


          setName("");
          setDescription("");
          setStatus("PLANNING");
          setStartDate("");
          setEndDate("");

          onClose();
        },
      }
    );
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/40
        backdrop-blur-sm
      "
    >
      <div
        className="
          w-full
          max-w-2xl
          rounded-2xl
          bg-white
          p-6
          shadow-xl
        "
      >
        {/* HEADER */}

        <div
          className="
            mb-6
            flex
            items-center
            justify-between
          "
        >
          <div>
            <h2
              className="
                text-2xl
                font-bold
              "
            >
              Create Project
            </h2>

            <p
              className="
                text-sm
                text-muted
              "
            >
              Create a new workspace
              project.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>

        {/* FORM */}

        <form
          onSubmit={
            handleSubmit
          }
          className="space-y-5"
        >
          {/* PROJECT NAME */}

          <div>
            <label
              className="
                mb-2
                block
                text-sm
                font-medium
              "
            >
              Project Name
            </label>

            <input
              required
              value={name}
              onChange={(e) =>
                setName(
                  e.target.value
                )
              }
              placeholder="AI Task Management System"
              className="
                w-full
                rounded-xl
                border
                border-border
                px-4
                py-3
              "
            />
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
              required
              rows={4}
              value={description}
              onChange={(e) =>
                setDescription(
                  e.target.value
                )
              }
              placeholder="Describe your project..."
              className="
                w-full
                rounded-xl
                border
                border-border
                px-4
                py-3
              "
            />
          </div>

          {/* STATUS */}

          <div>
            <label
              className="
                mb-2
                block
                text-sm
                font-medium
              "
            >
              Status
            </label>

            <select
              value={status}
              onChange={(e) =>
                setStatus(e.target.value as ProjectStatus)
              }
            >
              <option value="PLANNING">
                Planning
              </option>

              <option value="IN_PROGRESS">
                In Progress
              </option>

              <option value="ON_HOLD">
                On Hold
              </option>

              <option value="COMPLETED">
                Completed
              </option>
            </select>
          </div>

          {/* DATES */}

          <div
            className="
              grid
              grid-cols-1
              gap-4
              md:grid-cols-2
            "
          >
            <div>
              <label
                className="
                  mb-2
                  block
                  text-sm
                  font-medium
                "
              >
                Start Date
              </label>

              <input
                required
                type="date"
                value={startDate}
                onChange={(e) =>
                  setStartDate(
                    e.target.value
                  )
                }
                className="
                  w-full
                  rounded-xl
                  border
                  border-border
                  px-4
                  py-3
                "
              />
            </div>

            <div>
              <label
                className="
                  mb-2
                  block
                  text-sm
                  font-medium
                "
              >
                End Date
              </label>

              <input
                required
                type="date"
                value={endDate}
                onChange={(e) =>
                  setEndDate(
                    e.target.value
                  )
                }
                className="
                  w-full
                  rounded-xl
                  border
                  border-border
                  px-4
                  py-3
                "
              />
            </div>
          </div>

          {/* MEMBERS */}

          {/* <div>
            <label
              className="
                mb-2
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
                gap-2
              "
            >
              <input
                type="email"
                value={
                  memberEmail
                }
                onChange={(e) =>
                  setMemberEmail(
                    e.target.value
                  )
                }
                placeholder="member@gmail.com"
                className="
                  flex-1
                  rounded-xl
                  border
                  border-border
                  px-4
                  py-3
                "
              />

              <button
                type="button"
                onClick={
                  handleAddMember
                }
                className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-black
                  px-4
                  text-white
                "
              >
                <Plus size={16} />

                Add
              </button>
            </div>
          </div> */}

          {/* MEMBER LIST */}

          {/* {memberEmails.length >
            0 && (
              <div
                className="
                flex
                flex-wrap
                gap-2
              "
              >
                {memberEmails.map(
                  (email) => (
                    <div
                      key={email}
                      className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      bg-primaryLight
                      px-3
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
                      >
                        <X
                          size={14}
                        />
                      </button>
                    </div>
                  )
                )}
              </div>
            )} */}

          {/* FOOTER */}

          <div
            className="
              flex
              justify-end
              gap-3
              pt-2
            "
          >
            <button
              type="button"
              onClick={onClose}
              className="
                rounded-xl
                border
                border-border
                px-5
                py-3
                font-medium
              "
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isPending}
              className="
    rounded-xl
    bg-black
    px-5
    py-3
    font-medium
    text-white
    disabled:opacity-50
  "
            >
              {isPending
                ? "Creating..."
                : "Create Project"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateProjectModal;