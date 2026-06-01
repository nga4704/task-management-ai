import { Sparkles } from "lucide-react";

import {
  recommendations,
} from "../../data/mockInsights";

function RecommendationList() {
  return (
    <section
      className="
        rounded-[28px]
        bg-primaryLight
        p-6
      "
    >
      <div className="flex items-center gap-3">
        <Sparkles />

        <h2 className="font-bold text-xl">
          AI Recommendations
        </h2>
      </div>

      <div className="mt-8 space-y-4">
  {recommendations.map(
    (item, index) => (
      <div
        key={index}
        className="
          flex
          gap-4

          rounded-2xl

          bg-white/50

          p-5
        "
      >
        <div
          className="
            flex
            h-8
            w-8

            shrink-0

            items-center
            justify-center

            rounded-full

            bg-black

            text-white
            text-sm
            font-bold
          "
        >
          {index + 1}
        </div>

        <p className="leading-7">
          {item}
        </p>
      </div>
    )
  )}
</div>
    </section>
  );
}

export default RecommendationList;