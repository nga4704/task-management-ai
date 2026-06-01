import {
  BrainCircuit,
  Sparkles,
} from "lucide-react";

function ConfidenceScore() {
  return (
    <section
      className="
        rounded-[32px]

        border
        border-border

        bg-white/70

        p-6

        backdrop-blur-md
        shadow-soft
      "
    >
      <div className="flex items-center gap-3">
        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center

            rounded-2xl

            bg-primaryLight
          "
        >
          <BrainCircuit size={20} />
        </div>

        <div>
          <h2 className="font-bold">
            Model Confidence
          </h2>

          <p className="text-xs text-muted">
            Explainable AI
          </p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <h3
          className="
            text-6xl
            font-black
          "
        >
          94%
        </h3>

        <p className="mt-2 text-muted">
          Prediction Confidence
        </p>
      </div>

      <div
        className="
          mt-6

          flex
          items-center
          gap-2

          rounded-2xl

          bg-primaryLight/50

          p-4
        "
      >
        <Sparkles size={16} />

        <p className="text-sm">
          AI confidence remains high due
          to stable workload patterns.
        </p>
      </div>
    </section>
  );
}

export default ConfidenceScore;