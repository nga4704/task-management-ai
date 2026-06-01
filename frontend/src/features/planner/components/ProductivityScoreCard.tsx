function ProductivityScoreCard() {
  return (
    <section
      className="
        rounded-xl
        border
        border-border
        bg-surface
        p-6
        shadow-soft
      "
    >
      <div>
        <h2 className="text-2xl font-bold">
          Productivity Score
        </h2>

        <p className="mt-1 text-muted">
          AI efficiency prediction
        </p>
      </div>

      <div className="mt-8 flex justify-center">

        <div
          className="
            flex
            h-[220px]
            w-[220px]
            items-center
            justify-center
            rounded-full
            border-[18px]
            border-primary
          "
        >
          <div className="text-center">

            <h2 className="text-5xl font-bold">
              92%
            </h2>

            <p className="mt-2 text-muted">
              Efficiency
            </p>
          </div>
        </div>
      </div>

      <p
        className="
          mt-6
          text-center
          leading-7
          text-muted
        "
      >
        AI predicts a high productivity
        outcome based on your current
        workload and planning strategy.
      </p>
    </section>
  );
}

export default ProductivityScoreCard;