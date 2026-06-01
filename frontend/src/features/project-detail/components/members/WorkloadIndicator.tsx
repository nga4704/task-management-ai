type Props = {
  workload: number;
};

function WorkloadIndicator({
  workload,
}: Props) {
  return (
    <div
      className="
        h-2
        w-full
        rounded-full
        bg-border
      "
    >
      <div
        style={{
          width: `${workload}%`,
        }}
        className="
          h-full
          rounded-full
          bg-primary
        "
      />
    </div>
  );
}

export default WorkloadIndicator;