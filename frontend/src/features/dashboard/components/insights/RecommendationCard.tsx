import {
  Sparkles,
} from "lucide-react";

function RecommendationCard() {
  return (
    <div
      className="
        rounded-xl
        bg-surface
        border
        border-border
        p-5
      "
    >
      <div className="flex items-start gap-4">

        <div
          className="
            w-12
            h-12
            rounded-xl
            bg-secondaryLight
            flex
            items-center
            justify-center
          "
        >
          <Sparkles size={20} />
        </div>

        <div>
          <h3 className="font-bold text-lg">
            AI Recommendation
          </h3>

          <p className="mt-3 text-muted leading-7">
            Move UI testing tasks to tomorrow
            and prioritize database optimization
            today for higher sprint completion.
          </p>
        </div>
      </div>
    </div>
  );
}

export default RecommendationCard;