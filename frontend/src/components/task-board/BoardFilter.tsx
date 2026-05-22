function BoardFilter() {
  return (
    <div
      className="
        bg-white
        rounded-[28px]
        p-5
        shadow-soft
        flex
        flex-col
        md:flex-row
        gap-4
        justify-between
      "
    >
      <input
        type="text"
        placeholder="Search tasks..."
        className="
          bg-[#F7F7F7]
          px-4
          py-3
          rounded-2xl
          outline-none
          w-full
          md:max-w-sm
        "
      />

      <div className="flex gap-3">
        <button
          className="
            bg-primary
            px-4
            py-2
            rounded-full
          "
        >
          All
        </button>

        <button
          className="
            bg-gray-100
            px-4
            py-2
            rounded-full
          "
        >
          High Priority
        </button>
      </div>
    </div>
  );
}

export default BoardFilter;