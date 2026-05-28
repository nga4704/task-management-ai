import {
  BrainCircuit,
  TrendingUp,
} from "lucide-react";

function AIInsightCard() {
  return (
    <div
      className="
        rounded-xl
        bg-primaryLight
        p-6
      "
    >
      <div className="flex items-center gap-3">

        <div
          className="
            w-12
            h-12
            rounded-xl
            bg-black
            text-white
            flex
            items-center
            justify-center
          "
        >
          <BrainCircuit size={20} />
        </div>

        <div>
          <h3 className="font-bold text-lg">
            AI Productivity Insight
          </h3>

          <p className="text-sm text-black/60">
            Smart workload analysis
          </p>
        </div>
      </div>

      <div
        className="
          mt-6
          rounded-xl
          bg-white/50
          p-5
        "
      >
        <div className="flex items-start gap-3">

          <TrendingUp
            size={18}
            className="mt-1"
          />

          <p className="leading-7 text-black/80">
            Your productivity is 24% higher
            during morning focus sessions.
            AI recommends scheduling backend
            development tasks before 1PM.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AIInsightCard;