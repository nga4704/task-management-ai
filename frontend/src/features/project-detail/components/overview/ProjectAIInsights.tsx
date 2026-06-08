import {
  BrainCircuit,
  AlertTriangle,
  Sparkles,
} from "lucide-react";

function ProjectAIInsights() {
  return (
    <div
      className="
        rounded-[32px]
        bg-primaryLight
        p-6
        shadow-soft
      "
    >
      <div
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          bg-black/10
          px-3
          py-2
          text-xs
          font-semibold
        "
      >
        <Sparkles size={14} />
        AI Analysis
      </div>

      <h3
        className="
          mt-5
          text-xl
          font-bold
        "
      >
        Sprint Success Prediction
      </h3>

      <div
        className="
          mt-6
          flex
          items-center
          gap-4
        "
      >
        <div
          className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-black
            text-white
          "
        >
          <BrainCircuit />
        </div>

        <div>
          <p className="text-sm">
            Success Probability
          </p>

          <h2 className="text-5xl font-black">
            89%
          </h2>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <div
          className="
            rounded-2xl
            bg-white/40
            p-4
          "
        >
          Team productivity remains above
          baseline by 11%.
        </div>

        <div
          className="
            flex
            gap-3
            rounded-2xl
            bg-white/40
            p-4
          "
        >
          <AlertTriangle size={18} />

          Backend API tasks may exceed
          estimated completion time.
        </div>
      </div>
    </div>
  );
}

export default ProjectAIInsights;