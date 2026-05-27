import {
  BrainCircuit,
  AlertTriangle,
  Sparkles,
  Clock3,
} from "lucide-react";

function AIAssistantPanel() {
  return (
    <aside
      className="
        w-[340px]
        sticky
        top-6
        space-y-5
      "
    >
      {/* AI STATUS */}
      <div
        className="
          bg-gradient-to-br
          from-primary
          to-primaryLight
          rounded-[32px]
          p-6
          shadow-card
        "
      >
        <div className="flex items-center gap-3">

          <div
            className="
              w-12
              h-12
              rounded-2xl
              bg-black
              text-white
              flex
              items-center
              justify-center
            "
          >
            <BrainCircuit size={22} />
          </div>

          <div>
            <h3 className="font-bold text-xl">
              AI Assistant
            </h3>

            <p className="text-sm text-black/60">
              Smart productivity insights
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-4">

          <div className="bg-black/10 rounded-2xl p-4">
            <div className="flex items-start gap-3">

              <AlertTriangle
                size={18}
                className="mt-1"
              />

              <div>
                <h4 className="font-semibold">
                  High Risk Task
                </h4>

                <p className="text-sm text-black/70 mt-1 leading-6">
                  Backend API Integration has
                  82% overdue risk.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-black/10 rounded-2xl p-4">
            <div className="flex items-start gap-3">

              <Sparkles
                size={18}
                className="mt-1"
              />

              <div>
                <h4 className="font-semibold">
                  AI Recommendation
                </h4>

                <p className="text-sm text-black/70 mt-1 leading-6">
                  Schedule deep work between
                  9 AM - 12 PM for maximum
                  productivity.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* TODAY SUMMARY */}
      <div
        className="
          bg-white
          rounded-[32px]
          p-6
          shadow-soft
          border
          border-border
        "
      >
        <h3 className="font-bold text-xl">
          Today's Summary
        </h3>

        <div className="mt-6 space-y-4">

          <div className="flex items-center justify-between">
            <span className="text-muted">
              Focus Hours
            </span>

            <span className="font-semibold">
              6.5h
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-muted">
              Tasks Completed
            </span>

            <span className="font-semibold">
              8 / 12
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-muted">
              Meetings
            </span>

            <span className="font-semibold">
              3
            </span>
          </div>

        </div>

        <div
          className="
            mt-6
            bg-surface-secondary
            rounded-2xl
            p-4
            flex
            items-center
            gap-3
          "
        >
          <Clock3 size={18} />

          <p className="text-sm leading-6">
            Best focus period starts in
            35 minutes.
          </p>
        </div>
      </div>
    </aside>
  );
}

export default AIAssistantPanel;