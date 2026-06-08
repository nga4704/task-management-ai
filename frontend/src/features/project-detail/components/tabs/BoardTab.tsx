import ProjectTaskFilters from "../board/ProjectTaskFilters";
import KanbanBoard from "../board/KanbanBoard";

function BoardTab() {
  return (
    <div className="space-y-6">
      <ProjectTaskFilters />

      <KanbanBoard />
    </div>
  );
}

export default BoardTab;