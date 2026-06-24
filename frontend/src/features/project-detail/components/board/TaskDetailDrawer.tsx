import {
  X,
  BrainCircuit,
  AlertTriangle,
} from "lucide-react";

import type { Task } from "@/features/tasks/types/task.types";
import { useTaskDetail }
  from "@/features/tasks/hooks/useTaskDetail";

type Props = {
  taskId?: string;
  onClose: () => void;
};

function TaskDetailDrawer({
  taskId,
  onClose,
}: Props) {

  const { data: task } =
    useTaskDetail(taskId ?? "");

  if (!taskId) return null;

  return (
    <>
      <div
        className="
          fixed
          inset-0
          z-40

          bg-black/40
        "
        onClick={onClose}
      />

      <div
        className="
          fixed
          right-0
          top-0

          z-50

          h-screen
          w-full

          max-w-[720px]

          overflow-y-auto

          bg-white

          p-8

          shadow-2xl
        "
      >
        <div
          className="
            flex
            items-start
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
              {task?.title}
            </h2>

            <p
              className="
                mt-2
                text-muted
              "
            >
              {task?.description ?? "No description"}
            </p>
          </div>
          <div className="mt-6">
            <p className="font-semibold">
              Assignee
            </p>

            <p>
              {task?.users_tasks_assignee_idTousers?.full_name ??
                "Unassigned"}

            </p>
          </div>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        {/* Task Info */}

        <div className="mt-8">
          <h3 className="font-bold">
            Progress
          </h3>

          <div
            className="
              mt-3

              h-3

              rounded-full

              bg-border
            "
          >
            <div
              className="
                h-full

                rounded-full

                bg-primary
              "
              style={{
                width: `${task?.progress}%`,
              }}
            />
          </div>
        </div>

        {/* AI Analysis */}

        <div
          className="
            mt-8

            rounded-3xl

            bg-primaryLight

            p-6
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <BrainCircuit />

            <h3 className="font-bold">
              AI Analysis
            </h3>
          </div>

          <div className="mt-5">
            <p>
              Delay Probability
            </p>

            <h2
              className="
                text-5xl
                font-black
              "
            >
              82%
            </h2>
          </div>

          <p
            className="
              mt-5

              leading-7
            "
          >
            High workload and
            dependency bottlenecks
            detected.
          </p>
        </div>

        {/* Risk */}

        <div
          className="
            mt-6

            rounded-3xl

            border
            border-danger/30

            p-5
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <AlertTriangle />

            <h3 className="font-bold">
              Risk Breakdown
            </h3>
          </div>

          <ul
            className="
              mt-4
              space-y-2
            "
          >
            <li>
              • Resource overload
            </li>

            <li>
              • Tight deadline
            </li>

            <li>
              • API dependency
            </li>
          </ul>
        </div>

        {/* Recommendation */}

        <div
          className="
            mt-6

            rounded-3xl

            bg-surface

            p-5
          "
        >
          <h3 className="font-bold">
            Recommendation
          </h3>

          <p
            className="
              mt-3

              leading-7
            "
          >
            Assign one additional
            backend developer and
            split implementation into
            two milestones.
          </p>
        </div>
      </div>
    </>
  );
}

export default TaskDetailDrawer;