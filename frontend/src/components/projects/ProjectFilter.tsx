function ProjectFilter() {
  return (
    <div
      className="
        bg-white
        rounded-card
        p-5
        shadow-soft
        flex
        flex-col
        lg:flex-row
        gap-4
        justify-between
      "
    >
      <input
        type="text"
        placeholder="Search projects..."
        className="
          bg-[#F7F7F7]
          rounded-2xl
          px-4
          py-3
          outline-none
          w-full
          lg:max-w-sm
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
          Active
        </button>

        <button
          className="
            bg-gray-100
            px-4
            py-2
            rounded-full
          "
        >
          Completed
        </button>
      </div>
    </div>
  );
}

export default ProjectFilter;