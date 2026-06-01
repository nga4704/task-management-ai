import {
  Sparkles,
  BrainCircuit,
} from "lucide-react";

function PlannerHeader() {
  return (
    <section
      className="
        rounded-xl
        border
        border-border
        bg-white/70
        p-7
        shadow-soft
        backdrop-blur-md
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

            AI Planning Assistant Active
          </div>

          <h1
            className="
              mt-5
              text-4xl
              font-bold
            "
          >
            AI Smart Planner
          </h1>

          <p
            className="
              mt-3
              max-w-2xl
              text-lg
              text-muted
            "
          >
            Generate intelligent schedules,
            prioritize tasks and optimize
            productivity using AI analysis.
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

export default PlannerHeader;