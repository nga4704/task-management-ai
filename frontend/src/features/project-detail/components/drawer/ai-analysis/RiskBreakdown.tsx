function RiskBreakdown() {
  return (
    <div
      className="
        rounded-2xl
        border
        border-danger/20
        bg-dangerLight
        p-5
      "
    >
      <h3 className="font-bold">
        Risk Breakdown
      </h3>

      <ul
        className="
          mt-4
          space-y-2
          text-sm
        "
      >
        <li>Deadline pressure: 42%</li>
        <li>Workload overload: 31%</li>
        <li>Dependency delay: 27%</li>
      </ul>
    </div>
  );
}

export default RiskBreakdown;