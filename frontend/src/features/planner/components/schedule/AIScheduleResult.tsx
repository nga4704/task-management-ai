import ScheduleTimeline from "./ScheduleTimeline";
import TaskBreakdown from "./TaskBreakdown";
import AIRecommendationCard from "./AIRecommendationCard";
import ProductivityScoreCard from "./ProductivityScoreCard";

import type { GeneratedTask } from "../../types/planner.types";
import AIReasoning from "./AIReasoning";

type Props = {
  plans: GeneratedTask[];
  summary: any;
  reasoning: string[];
};

function AIScheduleResult({ plans, summary, reasoning }: Props) {
  if (!plans || plans.length === 0) {
    return (
      <div className="rounded-xl border border-border bg-surface p-6 text-muted">
        No schedule generated yet. Please generate AI plan.
      </div>
    );
  }

  return (
    <section className="space-y-6">
      <div className="grid grid-cols-12 gap-8">

        {/* LEFT */}
        <div className="col-span-12 lg:col-span-6">
          <ScheduleTimeline plans={plans} />
        </div>

        {/* RIGHT */}
        <div className="col-span-12 lg:col-span-6 flex flex-col gap-6">

          <TaskBreakdown plans={plans} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <AIRecommendationCard summary={summary} />

            <ProductivityScoreCard summary={summary} />

          </div>

          <AIReasoning reasoning={reasoning} />

        </div>

      </div>
    </section>
  );
}

export default AIScheduleResult;