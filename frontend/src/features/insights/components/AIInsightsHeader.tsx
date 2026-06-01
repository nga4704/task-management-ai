import {
  BrainCircuit,
  Sparkles,
} from "lucide-react";

function AIInsightsHeader() {
  return (
    <section
      className="
        rounded-[32px]
        border
        border-border/60

        bg-white/70
        backdrop-blur-md

        p-7
        md:p-8

        shadow-soft
      "
    >
      <div
        className="
          flex
          flex-col
          gap-6

          xl:flex-row
          xl:items-center
          xl:justify-between
        "
      >
        <div>
          <div
            className="
              inline-flex
              items-center
              gap-2

              rounded-full

              bg-primaryLight

              px-4
              py-2

              text-sm
              font-medium
            "
          >
            <Sparkles size={16} />

            Explainable AI Engine
          </div>

          <h1
            className="
              mt-5

              text-4xl
              font-bold
            "
          >
            AI Insights Center
          </h1>

          <p
            className="
              mt-3

              max-w-2xl

              text-lg
              text-muted
            "
          >
            Predict project risks, optimize
            schedules and understand AI
            decisions through explainable
            analytics.
          </p>
        </div>

        <div
          className="
            flex

            h-20
            w-20

            items-center
            justify-center

            rounded-[28px]

            bg-primaryLight
          "
        >
          <BrainCircuit size={34} />
        </div>
      </div>
    </section>
  );
}

export default AIInsightsHeader;