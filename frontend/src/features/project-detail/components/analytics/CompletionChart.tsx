function CompletionChart() {
  const data = [
    {
      label: "Week 1",
      value: 45,
    },
    {
      label: "Week 2",
      value: 60,
    },
    {
      label: "Week 3",
      value: 78,
    },
    {
      label: "Week 4",
      value: 92,
    },
  ];

  return (
    <div
      className="
        rounded-[28px]
        border
        border-border
        bg-white/70
        backdrop-blur-md
        p-6
        shadow-soft
      "
    >
      <div className="mb-6">
        <h3 className="font-bold text-lg">
          Completion Trend
        </h3>

        <p className="text-sm text-muted">
          Sprint progress over time
        </p>
      </div>

      <div className="space-y-5">
        {data.map((item) => (
          <div key={item.label}>
            <div className="flex justify-between mb-2">
              <span className="text-sm">
                {item.label}
              </span>

              <span className="text-sm font-semibold">
                {item.value}%
              </span>
            </div>

            <div
              className="
                h-3
                rounded-full
                bg-surface-secondary
              "
            >
              <div
                className="
                  h-full
                  rounded-full
                  bg-primary
                "
                style={{
                  width: `${item.value}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompletionChart;