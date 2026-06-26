import {
  useState,
} from "react";

import {
  X,
} from "lucide-react";

import {
  taskApi,
} from "../../../tasks/api/taskApi";

import { useCreateTask } from "@/features/tasks/hooks/useCreateTask";
import { useTeamMembers } from "@/features/teams/hooks/useTeamMembers";

type Props = {
  open: boolean;
  onClose: () => void;

  projectId: string;
  teamId: string;
};

function CreateTaskModal({
  open,
  onClose,
  projectId,
  teamId,
}: Props) {

  const [assigneeId, setAssigneeId] = useState<string>("");
  const { data: members = [] } = useTeamMembers(teamId);

  const { mutateAsync: createTask } = useCreateTask(projectId);

  const [loading, setLoading] =
    useState(false);

  const options = (members ?? []).map((m: any) => ({
    id: m.user_id,
    name: m.users?.full_name ?? m.users?.email ?? "Unknown",
  }));

  const [title, setTitle] =
    useState("");

  const [
    description,
    setDescription,
  ] = useState("");

  const [priority, setPriority] =
    useState("medium");

  const [deadline, setDeadline] =
    useState("");

  const [
    estimatedHours,
    setEstimatedHours,
  ] = useState("");

  if (!open) return null;

  const handleSubmit =
    async (
      e: React.FormEvent
    ) => {

      e.preventDefault();

      try {

        setLoading(true);

        await createTask({
          team_id: teamId,

          project_id: projectId,

          title,

          description,

          priority:
            priority as
            | "low"
            | "medium"
            | "high",

          deadline,

          estimated_hours:
            Number(
              estimatedHours
            ),
        });

        onClose();

      } catch (error) {

        console.error(
          error
        );

        alert(
          "Create task failed"
        );

      } finally {

        setLoading(false);
      }
    };

  return (
    <div
      className="
        fixed
        inset-0
        z-[100]

        flex
        items-center
        justify-center

        bg-black/40
      "
    >
      <div
        className="
          w-full
          max-w-2xl

          rounded-3xl

          bg-white

          p-8

          shadow-2xl
        "
      >
        <div
          className="
            mb-6
            flex
            items-center
            justify-between
          "
        >
          <h2
            className="
              text-2xl
              font-bold
            "
          >
            Create Task
          </h2>

          <button
            onClick={onClose}
          >
            <X />
          </button>
        </div>

        <form
          onSubmit={
            handleSubmit
          }
          className="space-y-5"
        >
          <div>
            <label>
              Title
            </label>

            <input
              value={title}
              onChange={(e) =>
                setTitle(
                  e.target.value
                )
              }
              className="
                mt-2
                w-full
                rounded-xl
                border
                p-3
              "
            />
          </div>

          <div>
            <label>
              Description
            </label>

            <textarea
              value={
                description
              }
              onChange={(e) =>
                setDescription(
                  e.target.value
                )
              }
              rows={4}
              className="
                mt-2
                w-full
                rounded-xl
                border
                p-3
              "
            />
          </div>

          <div
            className="
              grid
              grid-cols-2
              gap-4
            "
          >
            <div>
              <label>
                Priority
              </label>

              <select
                value={
                  priority
                }
                onChange={(e) =>
                  setPriority(
                    e.target.value
                  )
                }
                className="
                  mt-2
                  w-full
                  rounded-xl
                  border
                  p-3
                "
              >
                <option value="low">
                  Low
                </option>

                <option value="medium">
                  Medium
                </option>

                <option value="high">
                  High
                </option>
              </select>
            </div>

            <div>
              <label>
                Estimated Hours
              </label>

              <input
                type="number"
                value={
                  estimatedHours
                }
                onChange={(e) =>
                  setEstimatedHours(
                    e.target.value
                  )
                }
                className="
                  mt-2
                  w-full
                  rounded-xl
                  border
                  p-3
                "
              />
            </div>
          </div>

          <div>
            <label>
              Deadline
            </label>

            <input
              type="datetime-local"
              value={
                deadline
              }
              onChange={(e) =>
                setDeadline(
                  e.target.value
                )
              }
              className="
                mt-2
                w-full
                rounded-xl
                border
                p-3
              "
            />
          </div>

          <div>
            <label>
              Assignee
            </label>
            <select
              value={assigneeId}
              onChange={(e) => setAssigneeId(e.target.value)}
              className="mt-2 w-full rounded-xl border p-3"
            >
              <option value="">Unassigned</option>

              {options.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="
              w-full

              rounded-2xl

              bg-black

              py-4

              font-semibold
              text-white
            "
          >
            {loading
              ? "Creating..."
              : "Create Task"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateTaskModal;