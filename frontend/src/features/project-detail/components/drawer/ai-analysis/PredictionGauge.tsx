function PredictionGauge() {
  return (
    <div
      className="
        rounded-2xl
        bg-primaryLight
        p-5
      "
    >
      <p className="text-sm">
        Completion Probability
      </p>

      <h2
        className="
          mt-3
          text-5xl
          font-black
        "
      >
        89%
      </h2>
    </div>
  );
}

export default PredictionGauge;