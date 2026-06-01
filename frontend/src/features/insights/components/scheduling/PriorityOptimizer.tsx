function PriorityOptimizer() {
  return (
    <section
      className="
        rounded-[28px]
        border
        border-border
        bg-surface
        p-6
      "
    >
      <h2 className="font-bold text-xl">
        Priority Optimizer
      </h2>

      <div className="mt-6 space-y-4">
        <div className="rounded-xl bg-successLight p-4">
          High → Backend Integration
        </div>

        <div className="rounded-xl bg-warningLight p-4">
          Medium → Dashboard UI
        </div>

        <div className="rounded-xl bg-infoLight p-4">
          Low → Documentation
        </div>
      </div>
    </section>
  );
}

export default PriorityOptimizer;