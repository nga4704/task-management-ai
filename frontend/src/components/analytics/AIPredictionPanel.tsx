function AIPredictionPanel() {
  return (
    <div
      className="
        bg-primary
        rounded-card
        p-6
      "
    >
      <h2 className="text-3xl font-bold">
        AI Prediction
      </h2>

      <p className="mt-5 leading-relaxed text-black/80">
        Based on current productivity trends,
        the project completion probability
        is estimated at 87%.
      </p>

      <div className="mt-8">
        <div className="flex justify-between mb-3">
          <span>Prediction Accuracy</span>

          <span>87%</span>
        </div>

        <div
          className="
            h-3
            bg-black/10
            rounded-full
            overflow-hidden
          "
        >
          <div
            className="
              h-full
              bg-black
              rounded-full
            "
            style={{
              width: "87%",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default AIPredictionPanel;