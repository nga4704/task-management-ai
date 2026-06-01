function AIExplanationPanel() {
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
      <h3 className="font-bold">
        AI Explanation
      </h3>

      <p
        className="
          mt-4
          text-sm
          leading-7
          text-muted
        "
      >
        Based on historical sprint data,
        current workload and dependency
        structure, the task has a medium
        risk of delay.
      </p>
    </div>
  );
}

export default AIExplanationPanel;