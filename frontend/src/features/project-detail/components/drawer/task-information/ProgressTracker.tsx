function ProgressTracker() {
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
      <div className="flex justify-between">
        <h3 className="font-bold">
          Progress
        </h3>

        <span>72%</span>
      </div>

      <div
        className="
          mt-4
          h-3
          rounded-full
          bg-border
        "
      >
        <div
          className="
            h-full
            w-[72%]
            rounded-full
            bg-primary
          "
        />
      </div>
    </div>
  );
}

export default ProgressTracker;