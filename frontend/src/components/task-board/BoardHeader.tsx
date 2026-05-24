function BoardHeader() {
  return (
    <div
      className="
        bg-white
        rounded-card
        p-6
        shadow-soft
        flex
        justify-between
        items-center
      "
    >
      <div>
        <h1 className="text-3xl font-bold">
          Task Board
        </h1>

        <p className="text-gray-500 mt-2">
          Manage and organize project tasks
        </p>
      </div>

      <button
        className="
          bg-primary
          px-5
          py-3
          rounded-full
          font-semibold
        "
      >
        + Create Task
      </button>
    </div>
  );
}

export default BoardHeader;