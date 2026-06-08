type Props = {
  workload: number;
};

function WorkloadIndicator({
  workload,
}: Props) {
  const color =
    workload >= 85
      ? "bg-red-500"
      : workload >= 70
      ? "bg-amber-500"
      : "bg-emerald-500";

  return (
    <div className="flex items-center gap-3">
      <div
        className="
          h-2.5
          flex-1
          rounded-full
          bg-surfaceSecondary
        "
      >
        <div
          style={{
            width: `${workload}%`,
          }}
          className={`
            h-full
            rounded-full
            ${color}
          `}
        />
      </div>

      <span
        className="
          min-w-[48px]
          text-sm
          font-semibold
        "
      >
        {workload}%
      </span>
    </div>
  );
}

export default WorkloadIndicator;