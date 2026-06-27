import { Lightbulb } from "lucide-react";

type Props = {
  recommendation: string;
};

function RecommendationCard({
  recommendation,
}: Props) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-border
        bg-surface
        p-5
        shadow-soft
      "
    >
      <div className="flex items-center gap-3">
        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            bg-primaryLight
          "
        >
          <Lightbulb
            size={20}
            className="text-black"
          />
        </div>

        <div>
          <h3 className="font-semibold">
            AI Recommendation
          </h3>

          <p className="text-sm text-muted">
            Suggested next action
          </p>
        </div>
      </div>

      <div
        className="
          mt-5
          rounded-xl
          bg-surfaceSecondary
          p-4
        "
      >
        <p
          className="
            text-sm
            leading-6
          "
        >
          {recommendation}
        </p>
      </div>
    </div>
  );
}

export default RecommendationCard;