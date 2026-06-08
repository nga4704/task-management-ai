import {
  BrainCircuit,
  AlertTriangle,
} from "lucide-react";

function TimelineInsights() {
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
          flex
          h-14
          w-14
          items-center
          justify-center

          rounded-2xl

          bg-black
          text-white
        "
      >
        <BrainCircuit />
      </div>

      <h3
        className="
          mt-5
          text-lg
          font-bold
        "
      >
        AI Schedule Risk
      </h3>

      <h2
        className="
          mt-3
          text-4xl
          font-black
        "
      >
        Low
      </h2>

      <div
        className="
          mt-5

          rounded-2xl

          bg-white/60

          p-4
        "
      >
        <div className="flex gap-3">
          <AlertTriangle size={18} />

          <p
            className="
              text-sm
              leading-6
            "
          >
            AI predicts a 92% chance
            of completing the current
            roadmap on schedule.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TimelineInsights;