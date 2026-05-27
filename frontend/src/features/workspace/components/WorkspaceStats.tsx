import WorkspaceStatCard from "./WorkspaceStatCard";

function WorkspaceStats() {
  return (
    <section
      className="
        grid
        grid-cols-1
        gap-6
        md:grid-cols-2
        xl:grid-cols-4
      "
    >
      <WorkspaceStatCard
        title="Active Projects"
        value="12"
      />

      <WorkspaceStatCard
        title="Team Members"
        value="34"
      />

      <WorkspaceStatCard
        title="AI Productivity"
        value="91%"
      />

      <WorkspaceStatCard
        title="Completed Sprints"
        value="18"
      />
    </section>
  );
}

export default WorkspaceStats;