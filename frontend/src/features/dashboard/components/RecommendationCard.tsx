import {
  ArrowRight,
  Sparkles,
} from "lucide-react";

function RecommendationCard() {
  return (
    <div
      className="
        rounded-[28px]

        border
        border-border

        bg-surface

        p-5

        shadow-soft
      "
    >
      <div className="flex items-start gap-4">
        <div
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center

            rounded-2xl

            bg-secondaryLight
          "
        >
          <Sparkles size={20} />
        </div>

        <div>
          <h3
            className="
              text-lg
              font-bold
            "
          >
            AI Recommendation
          </h3>

          <p
            className="
              mt-3

              text-sm
              leading-7

              text-muted
            "
          >
            Prioritize database optimization
            today and postpone UI testing
            until tomorrow.
          </p>

          <button
            className="
              mt-4

              inline-flex
              items-center
              gap-2

              text-sm
              font-semibold

              text-secondary
            "
          >
            Apply suggestion

            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecommendationCard;