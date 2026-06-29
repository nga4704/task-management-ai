import type { PlannerSummary } from "../../types/planner.types";

type Props = {
  summary: PlannerSummary | null;
};

function ProductivityScoreCard({ summary }: Props) {
  if (!summary) return null;

  return (
    <section className="rounded-3xl border bg-surface p-5">
      <h3 className="text-lg font-semibold">
        Productivity Score
      </h3>

      <div className="mt-5 text-5xl font-bold text-primary">
        {summary.productivityScore}%
      </div>

      <div className="mt-4 space-y-2 text-sm text-muted">
        <p>
          Risk Level:
          <span className="ml-2 font-semibold capitalize">
            {summary.riskLevel}
          </span>
        </p>

        <p>
          Estimated Duration:
          <span className="ml-2 font-semibold">
            {summary.estimatedDays} days
          </span>
        </p>

        {summary.confidence !== undefined && (
          <p>
            Confidence:
            <span className="ml-2 font-semibold">
              {summary.confidence}%
            </span>
          </p>
        )}
      </div>
    </section>
  );
}

export default ProductivityScoreCard;