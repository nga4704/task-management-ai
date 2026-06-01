import {
  BrainCircuit,
  Sparkles,
} from "lucide-react";

function ProjectAIInsights() {
  return (
    <div
      className="
        rounded-[32px]

        bg-primaryLight

        p-6

        shadow-card
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
        AI Insight
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
          mt-5

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
          <p className="text-sm text-black/70">
            Success Rate
          </p>

          <h2
            className="
              text-4xl
              font-black
            "
          >
            89%
          </h2>
        </div>
      </div>

      <p
        className="
          mt-6

          text-sm
          leading-7

          text-black/80
        "
      >
        AI predicts this sprint is
        likely to finish on schedule.
        Current team velocity remains
        above the planned baseline.
      </p>
    </div>
  );
}

export default ProjectAIInsights;