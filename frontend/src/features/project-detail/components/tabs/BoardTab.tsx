import TaskFilters from "../board/TaskFilters";
import KanbanBoard from "../board/KanbanBoard";

function BoardTab() {
  return (
    <div className="space-y-6">
      <TaskFilters />

      <KanbanBoard />
    </div>
  );
}

export default BoardTab;