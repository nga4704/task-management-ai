function ProjectProgressChart() {
  return (
    <div
      className="
        rounded-[32px]
        border
        border-border

        bg-white/70
        backdrop-blur-md

        p-6

        shadow-soft
      "
    >
      <h3
        className="
          text-lg
          font-bold
        "
      >
        Project Progress
      </h3>

      <p
        className="
          mt-1
          text-sm
          text-muted
        "
      >
        Sprint completion trend
      </p>

      <div
        className="
          mt-8

          flex
          h-[320px]
          items-center
          justify-center

          rounded-2xl

          bg-surface
        "
      >
        Chart Placeholder
      </div>
    </div>
  );
}

export default ProjectProgressChart;