import {
  BrainCircuit,
  Sparkles,
} from "lucide-react";

function PlannerHeader() {
  return (
    <section
      className="
        rounded-3xl
        border
        border-border
        bg-primaryLight
        p-8
        shadow-sm
      "
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-black
              px-4
              py-2
              text-xs
              font-semibold
              text-white
            "
          >
            <Sparkles size={14} />
            AI Planning Assistant
          </div>

          <h1 className="mt-5 text-3xl font-bold tracking-tight">
            AI Smart Project Planner
          </h1>

          <p
            className="
              mt-4
              max-w-2xl
              text-sm
              leading-7
              text-muted
            "
          >
            Automatically decompose project goals,
            resolve task dependencies,
            optimize workload allocation,
            and generate an executable schedule
            using AI-powered planning algorithms.
          </p>

        </div>

        <div
          className="
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-3xl
            bg-black
            text-white
            shadow-lg
          "
        >
          <BrainCircuit size={36} />
        </div>

      </div>
    </section>
  );
}

export default PlannerHeader;