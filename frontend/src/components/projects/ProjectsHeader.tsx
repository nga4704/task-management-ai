function ProjectsHeader() {
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
          Projects
        </h1>

        <p className="text-gray-500 mt-3">
          Manage and monitor all project workspaces
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
        + New Project
      </button>
    </div>
  );
}

export default ProjectsHeader;