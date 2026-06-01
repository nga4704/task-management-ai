function PredictionGauge() {
  return (
    <section
      className="
        relative
        overflow-hidden

        rounded-[32px]

        bg-primaryLight

        p-6

        shadow-card
      "
    >
      <div
        className="
          absolute
          right-[-40px]
          top-[-40px]

          h-40
          w-40

          rounded-full

          bg-white/20
        "
      />

      <div className="relative z-10">
        <p className="text-sm font-medium">
          Sprint Success Prediction
        </p>

        <div
          className="
            mt-6
            flex
            justify-center
          "
        >
          <div
            className="
              flex
              h-44
              w-44
              items-center
              justify-center

              rounded-full

              border-[14px]
              border-black
            "
          >
            <div className="text-center">
              <h3
                className="
                  text-5xl
                  font-black
                "
              >
                89%
              </h3>

              <p className="text-sm">
                Success Rate
              </p>
            </div>
          </div>
        </div>

        <p
          className="
            mt-5
            text-center
            text-sm
            text-black/70
          "
        >
          AI predicts high sprint completion
          probability based on current
          workload and team velocity.
        </p>
      </div>
    </section>
  );
}

export default PredictionGauge;