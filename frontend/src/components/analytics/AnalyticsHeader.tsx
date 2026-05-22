function AnalyticsHeader() {
  return (
    <div
      className="
        bg-white
        rounded-[28px]
        p-6
        shadow-soft
        flex
        flex-col
        lg:flex-row
        lg:items-center
        lg:justify-between
        gap-6
      "
    >
      <div>
        <h1 className="text-4xl font-bold">
          Analytics
        </h1>

        <p className="text-gray-500 mt-3">
          Monitor productivity and AI performance insights
        </p>
      </div>

      <button
        className="
          bg-primary
          px-6
          py-3
          rounded-full
          font-semibold
        "
      >
        Export Report
      </button>
    </div>
  );
}

export default AnalyticsHeader;