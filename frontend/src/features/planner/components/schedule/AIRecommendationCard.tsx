import type { PlannerSummary } from "../../types/planner.types";

type Props = {
  summary: PlannerSummary | null;
};

function AIRecommendationCard({ summary }: Props) {
  if (!summary) return null;

  return (
    <section className="rounded-3xl border bg-surface p-5">
      <h3 className="font-semibold text-lg">
        AI Recommendation
      </h3>

      <p className="mt-4 text-sm leading-6">
        {summary.recommendation}
      </p>

      <div className="mt-6 space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Deadline Fit</span>
          <span>{Math.round(summary.breakdown.deadlineFit * 100)}%</span>
        </div>

        <div className="flex justify-between">
          <span>Workload Fit</span>
          <span>{Math.round(summary.breakdown.workloadFit * 100)}%</span>
        </div>

        <div className="flex justify-between">
          <span>Complexity</span>
          <span>{Math.round(summary.breakdown.complexity * 100)}%</span>
        </div>
      </div>
    </section>
  );
}

export default AIRecommendationCard;