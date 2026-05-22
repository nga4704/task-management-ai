function TaskHeader() {
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
        <div className="flex items-center gap-3">
          <span
            className="
              bg-primary
              px-4
              py-1
              rounded-full
              text-sm
              font-medium
            "
          >
            In Progress
          </span>

          <span className="text-gray-500">
            High Priority
          </span>
        </div>

        <h1 className="text-4xl font-bold mt-5">
          Build AI Task Prediction System
        </h1>

        <p className="text-gray-500 mt-4 max-w-2xl leading-relaxed">
          Develop an intelligent prediction module
          that analyzes task progress and suggests
          optimized schedules for the team.
        </p>
      </div>

      <div className="flex gap-3">
        <button
          className="
            bg-gray-100
            px-5
            py-3
            rounded-full
          "
        >
          Edit
        </button>

        <button
          className="
            bg-primary
            px-5
            py-3
            rounded-full
            font-semibold
          "
        >
          Mark Complete
        </button>
      </div>
    </div>
  );
}

export default TaskHeader;