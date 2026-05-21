function ProjectHero() {
  return (
    <div
      className="
        bg-primary
        rounded-[32px]
        p-8
        relative
        overflow-hidden
      "
    >
      <div className="max-w-2xl">
        <p className="font-medium">
          Workspace Overview
        </p>

        <h1 className="text-5xl font-bold mt-4 leading-tight">
          AI Task Management System
        </h1>

        <p className="mt-6 text-black/70 leading-relaxed">
          Manage tasks, predict progress,
          and optimize your workflow using AI.
        </p>

        <button
          className="
            mt-8
            bg-black
            text-white
            px-6
            py-3
            rounded-full
          "
        >
          Open Workspace
        </button>
      </div>
    </div>
  );
}

export default ProjectHero;