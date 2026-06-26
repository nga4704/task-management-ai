import type { GeneratedTask } from "../../types/planner.types";

type Props = {
  summary: any;
};

function ProductivityScoreCard({ summary }: Props) {
  return (
    <section className="rounded-3xl border bg-surface p-5">
      <h3 className="text-sm font-semibold">
        Productivity Score
      </h3>

      <div className="mt-4 text-4xl font-bold">
        {summary?.productivityScore ?? 0}%
      </div>

      <p className="text-xs text-muted mt-2">
        AI estimated score
      </p>
    </section>
  );
}


export default ProductivityScoreCard;