function WorkloadCard() {
  return (
    <div
      className="
        rounded-xl
        bg-surface
        border
        border-border
        p-6
      "
    >
      <div className="flex items-center justify-between">

        <div>
          <p className="text-muted">
            Team Workload
          </p>

          <h2 className="text-4xl font-bold mt-3">
            78%
          </h2>
        </div>

        <div
          className="
            px-3
            py-1
            rounded-full
            bg-warningLight
            text-warning
            text-sm
            font-medium
          "
        >
          Moderate
        </div>
      </div>

      <div
        className="
          mt-6
          h-3
          rounded-full
          bg-surfaceSecondary
          overflow-hidden
        "
      >
        <div
          className="
            h-full
            w-[78%]
            bg-warning
            rounded-full
          "
        />
      </div>

      <p className="mt-4 text-sm text-muted leading-6">
        AI predicts workload spike on Thursday.
      </p>
    </div>
  );
}

export default WorkloadCard;