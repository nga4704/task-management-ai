import {
  CheckCircle2,
  AlertTriangle,
  Clock3,
} from "lucide-react";

function SprintHealthCard() {
  return (
    <section
      className="
        rounded-[32px]
        border
        border-border
        bg-surface
        p-6
        shadow-soft
      "
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold">
            Sprint Health
          </h3>

          <p className="text-sm text-muted mt-1">
            Current sprint performance
          </p>
        </div>

        <div
          className="
            rounded-full
            bg-successLight
            px-3
            py-1
            text-sm
            font-semibold
            text-success
          "
        >
          Healthy
        </div>
      </div>

      <div className="mt-8 space-y-4">

        <div
          className="
            flex
            items-center
            justify-between

            rounded-2xl
            bg-surfaceSecondary
            p-4
          "
        >
          <div className="flex items-center gap-3">
            <CheckCircle2 size={18} />

            <span>
              Completed Tasks
            </span>
          </div>

          <strong>94</strong>
        </div>

        <div
          className="
            flex
            items-center
            justify-between

            rounded-2xl
            bg-surfaceSecondary
            p-4
          "
        >
          <div className="flex items-center gap-3">
            <Clock3 size={18} />

            <span>
              Remaining Tasks
            </span>
          </div>

          <strong>30</strong>
        </div>

        <div
          className="
            flex
            items-center
            justify-between

            rounded-2xl
            bg-surfaceSecondary
            p-4
          "
        >
          <div className="flex items-center gap-3">
            <AlertTriangle size={18} />

            <span>
              At Risk Tasks
            </span>
          </div>

          <strong>4</strong>
        </div>
      </div>
    </section>
  );
}

export default SprintHealthCard;