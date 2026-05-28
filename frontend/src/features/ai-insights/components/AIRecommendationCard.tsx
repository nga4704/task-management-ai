import {
  BrainCircuit,
  TrendingUp,
} from "lucide-react";

function AIRecommendationCard() {
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
            AI Recommendation
          </h2>

          <p className="text-sm text-black/70">
            Smart planning insight
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
            AI recommends scheduling
            backend development tasks
            during morning sessions
            to maximize productivity.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AIRecommendationCard;