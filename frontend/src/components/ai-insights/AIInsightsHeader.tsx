function AIInsightsHeader() {
  return (
    <div
      className="
        bg-primary
        rounded-[32px]
        p-8
        flex
        flex-col
        lg:flex-row
        lg:items-center
        lg:justify-between
        gap-6
      "
    >
      <div>
        <p className="font-medium">
          Intelligent Workspace Analytics
        </p>

        <h1 className="text-5xl font-bold mt-4">
          AI Insights
        </h1>

        <p className="mt-5 max-w-2xl leading-relaxed text-black/80">
          Analyze productivity, predict delays,
          and optimize team workflow using AI-driven insights.
        </p>
      </div>

      <button
        className="
          bg-black
          text-white
          px-6
          py-3
          rounded-full
          font-semibold
        "
      >
        Generate AI Report
      </button>
    </div>
  );
}

export default AIInsightsHeader;