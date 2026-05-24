function ScheduleHeader() {
  return (
    <div
      className="
        bg-white
        rounded-card
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
          Schedule Planner
        </h1>

        <p className="text-gray-500 mt-3">
          Organize your tasks and optimize productivity
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
        + Add Schedule
      </button>
    </div>
  );
}

export default ScheduleHeader;