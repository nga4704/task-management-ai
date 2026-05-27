import {
  BrainCircuit,
  TrendingUp,
} from "lucide-react";

function AIInsightPanel() {
  return (
    <section
      className="
        rounded-xl
        bg-primaryLight
        p-6
      "
    >
      <div className="flex items-center gap-4">

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
          <BrainCircuit size={22} />
        </div>

        <div>
          <h2 className="text-xl font-bold">
            AI Insight
          </h2>

          <p className="text-sm text-black/70">
            Smart productivity prediction
          </p>
        </div>
      </div>

      <div
        className="
          mt-6
          rounded-2xl
          bg-white/50
          p-5
        "
      >
        <div className="flex gap-3">

          <TrendingUp
            size={18}
            className="mt-1"
          />

          <p className="leading-7 text-black/80">
            AI predicts productivity
            will increase by 16%
            if backend optimization
            tasks are prioritized
            before Wednesday.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AIInsightPanel;