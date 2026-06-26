type AIReasoningProps = {
  reasoning: string[];
};

function AIReasoning({ reasoning }: AIReasoningProps) {
  if (!reasoning || reasoning.length === 0) {
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
      <h3 className="font-semibold mb-3">
        AI Reasoning
      </h3>

      <ul className="space-y-2 text-sm text-muted">
        {reasoning.map((r, i) => (
          <li key={i} className="leading-6">
            • {r}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AIReasoning;