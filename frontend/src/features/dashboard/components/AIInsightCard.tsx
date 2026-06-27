import {
  BrainCircuit,
  TrendingUp,
  Sparkles,
} from "lucide-react";

import type {
  DashboardInsight,
} from "../types/dashboard.types";

type Props = {
  insights: DashboardInsight;
};

function AIInsightCard({
  insights,
}: Props) {

  const trend =
    insights.productivityScore >= 80
      ? "Excellent"
      : insights.productivityScore >= 60
      ? "Good"
      : "Needs Improvement";

  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[28px]
        border
        bg-white
        p-5
        md:p-6
        shadow-card
      "
    >
      {/* Decoration */}
      <div
        className="
          absolute
          -right-8
          -top-8
          h-28
          w-28
          rounded-full
          bg-primaryLight
        "
      />

      <div className="relative z-10">

        {/* HEADER */}
        <div className="flex items-center justify-between">

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-secondaryLight
              px-3
              py-1.5
              text-xs
              font-medium
              text-secondary
            "
          >
            <Sparkles size={14} />

            AI Insight

          </div>

          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-black
              text-white"
            >
            <BrainCircuit size={18} />
          </div>

        </div>

        {/* SCORE */}
        <div className="mt-5">

          <p className="text-sm text-black/60">
            Productivity Score
          </p>

          <div className="mt-2 flex items-end gap-3">

            <h2
              className="
                text-5xl
                font-black
                leading-none
              "
            >
              {insights.productivityScore}%
            </h2>

            <div
              className="
                mb-1
                flex
                items-center
                gap-1
                rounded-full
                bg-successLight
                px-2.5
                py-1
                text-xs
                font-semibold
                text-success
              "
            >
              <TrendingUp size={12} />

              {trend}
            </div>

          </div>

        </div>

        {/* METRICS */}
        <div
          className="
            mt-5
            grid
            grid-cols-2
            gap-3
          "
        >

          <div
            className="
              rounded-xl
              bg-primaryLight
              px-4
              py-3
            "
          >
            <p className="text-xs text-black/60">
              Focus Window
            </p>

            <h4 className="mt-1 font-semibold">
              {insights.focusWindow}
            </h4>

          </div>

          <div
            className="
              rounded-xl
              bg-primaryLight
              px-4
              py-3
            "
          >
            <p className="text-xs text-black/60">
              Sprint Success
            </p>

            <h4 className="mt-1 font-semibold">
              {insights.sprintSuccess}%
            </h4>

          </div>

        </div>

        {/* Recommendation */}
        <div
          className="
            mt-5
            rounded-xl
            bg-white/50
            px-4
            py-3
          "
        >
          <p
            className="
              text-sm
              leading-6
              text-black/75
            "
          >
            {insights.recommendation}
          </p>
        </div>

      </div>
    </div>
  );
}

export default AIInsightCard;