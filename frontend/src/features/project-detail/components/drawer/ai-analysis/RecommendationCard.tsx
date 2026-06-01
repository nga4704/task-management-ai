import { Sparkles } from "lucide-react";

function RecommendationCard() {
  return (
    <div
      className="
        rounded-2xl
        border
        border-border
        bg-surface
        p-5
      "
    >
      <div className="flex gap-3">
        <Sparkles size={18} />

        <div>
          <h3 className="font-bold">
            AI Recommendation
          </h3>

          <p
            className="
              mt-2
              text-sm
              text-muted
            "
          >
            Assign an additional backend
            developer to reduce delay risk.
          </p>
        </div>
      </div>
    </div>
  );
}

export default RecommendationCard;