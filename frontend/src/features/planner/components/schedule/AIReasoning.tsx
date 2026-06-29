import type { PlannerSummary } from "../../types/planner.types";

type Props = {
  reasoning: string[];
  summary: PlannerSummary | null;
};

function AIReasoning({
  reasoning,
  summary,
}: Props) {
  const issues = summary?.issues ?? [];

  if (
    reasoning.length === 0 &&
    issues.length === 0
  ) {
    return (
      <section className="rounded-xl border bg-surface p-5">
        <h3 className="font-semibold mb-3">
          AI Reasoning
        </h3>

        <p className="text-sm text-muted">
          No reasoning available.
        </p>
      </section>
    );
  }

  return (
    <section className="rounded-xl border bg-surface p-5">
      <h3 className="font-semibold mb-4">
        AI Analysis
      </h3>

      {reasoning.length > 0 && (
        <>
          <h4 className="text-sm font-semibold mb-2">
            AI Reasoning
          </h4>

          <ul className="space-y-2 text-sm text-muted">
            {reasoning.map((item, index) => (
              <li key={index}>
                • {item}
              </li>
            ))}
          </ul>
        </>
      )}

      {issues.length > 0 && (
        <>
          <h4 className="mt-6 text-sm font-semibold text-red-500">
            Potential Issues
          </h4>

          <ul className="mt-2 space-y-2 text-sm text-red-500">
            {issues.map((issue, index) => (
              <li key={index}>
                • {issue}
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}

export default AIReasoning;