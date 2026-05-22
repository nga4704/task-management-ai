type RecommendationCardProps = {
  recommendation: string;
};

function RecommendationCard({
  recommendation,
}: RecommendationCardProps) {
  return (
    <div
      className="
        bg-primary
        rounded-[24px]
        p-5
      "
    >
      <h3 className="text-2xl font-bold">
        Smart Recommendation
      </h3>

      <p className="mt-5 leading-relaxed text-black/80">
        {recommendation}
      </p>
    </div>
  );
}

export default RecommendationCard;