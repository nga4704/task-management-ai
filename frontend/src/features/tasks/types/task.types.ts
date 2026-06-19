export interface CreateTaskPayload {
  team_id: string;
  project_id: string;

  title: string;
  description?: string;

  assignee_id?: string;

  priority: "low" | "medium" | "high";

  status: "todo" | "in-progress" | "review" | "done";

  deadline?: string;

  estimated_hours?: number;

  // VERY IMPORTANT for Kanban / drag & drop
  position?: number;
}