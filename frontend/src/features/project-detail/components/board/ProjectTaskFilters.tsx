function ProjectTaskFilters() {
  return (
    <div
      className="
        flex
        flex-wrap
        gap-3
      "
    >
      <button className="btn-primary">
        All
      </button>

      <button className="btn-secondary">
        High Priority
      </button>

      <button className="btn-secondary">
        Overdue
      </button>

      <button className="btn-secondary">
        AI Risk
      </button>
    </div>
  );
}

export default ProjectTaskFilters;