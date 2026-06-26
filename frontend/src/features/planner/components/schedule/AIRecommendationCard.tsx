import { BrainCircuit } from "lucide-react";
import type { GeneratedTask } from "../../types/planner.types";

type Props = {
  summary: any;
};

function AIRecommendationCard({ summary }: Props) {
  return (
    <section className="rounded-3xl bg-primaryLight p-5">
      <h3 className="font-semibold text-sm">
        AI Recommendation
      </h3>

      <p className="mt-3 text-sm">
        <div>
          Deadline Fit: {summary?.breakdown?.deadlineFit}
          Workload Fit: {summary?.breakdown?.workloadFit}
          Complexity: {summary?.breakdown?.complexity}
        </div>
      </p>
    </section>
  );
}

export default AIRecommendationCard;