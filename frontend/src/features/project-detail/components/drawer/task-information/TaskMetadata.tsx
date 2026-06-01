function TaskMetadata() {
  return (
    <div
      className="
        rounded-2xl
        border
        border-border
        bg-surface
        p-5
      "
    >
      <h3 className="font-bold">
        Task Information
      </h3>

      <div className="mt-4 space-y-3 text-sm">
        <div className="flex justify-between">
          <span>Status</span>
          <span>In Progress</span>
        </div>

        <div className="flex justify-between">
          <span>Priority</span>
          <span>High</span>
        </div>

        <div className="flex justify-between">
          <span>Assignee</span>
          <span>Nga</span>
        </div>

        <div className="flex justify-between">
          <span>Deadline</span>
          <span>May 30</span>
        </div>
      </div>
    </div>
  );
}

export default TaskMetadata;