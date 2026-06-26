import { Sparkles, BrainCircuit } from "lucide-react";

function PlannerHeader() {
  return (
    <section
      className="
        rounded-3xl
        border
        border-border
        bg-primaryLight
        p-6
        shadow-sm
        backdrop-blur-md
      "
    >
      <div className="flex items-start justify-between gap-6">

        {/* LEFT CONTENT */}
        <div className="space-y-4">

          {/* badge */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-black
              text-white
              px-3
              py-1.5
              text-xs
              font-medium
            "
          >
            <Sparkles size={14} />
            AI Planning Assistant Active
          </div>

          {/* title */}
          <h1
            className="
              text-2xl
              font-bold
              tracking-tight
              text-foreground
            "
          >
            AI Smart Planner
          </h1>

          {/* description */}
          <p
            className="
              max-w-xl
              text-sm
              leading-6
              text-muted
            "
          >
            Generate optimized schedules, prioritize tasks, and improve productivity
            with AI-powered insights.
          </p>
        </div>

        {/* RIGHT ICON */}
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-black
            text-white
            ring-1
            ring-black/5
          "
        >
          <BrainCircuit size={24} />
        </div>

      </div>
    </section>
  );
}

export default PlannerHeader;