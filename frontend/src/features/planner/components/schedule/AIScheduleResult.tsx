import ScheduleTimeline from "./ScheduleTimeline";
import ProductivityScoreCard from "./ProductivityScoreCard";
import AIRecommendationCard from "./AIRecommendationCard";
import AIReasoning from "./AIReasoning";

import type {
  PlannerTask,
  PlannerSummary,
} from "../../types/planner.types";

type Props = {
  plans: PlannerTask[];
  summary: PlannerSummary | null;
  reasoning: string[];
};

function AIScheduleResult({
  plans,
  summary,
  reasoning,
}: Props) {
  if (plans.length === 0) {
    return (
      <section
        className="
          rounded-3xl
          border
          border-border
          bg-surface
          p-10
          text-center
          text-muted
        "
      >
        No AI schedule generated yet.
      </section>
    );
  }

  return (
    <section className="grid grid-cols-12 gap-8">

      <div className="col-span-12 lg:col-span-7">
        <ScheduleTimeline plans={plans} />
      </div>

      <div className="col-span-12 lg:col-span-5 flex flex-col gap-6">

        <ProductivityScoreCard
          summary={summary}
        />

        <AIRecommendationCard
          summary={summary}
        />

        <AIReasoning
          reasoning={reasoning}
          summary={summary}
        />
      </div>

    </section>
  );
}

export default AIScheduleResult;