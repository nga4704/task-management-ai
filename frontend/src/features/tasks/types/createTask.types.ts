export interface CreateTaskPayload {
  team_id: string;
  project_id: string;

  title: string;
  description?: string;

  assignee_id?: string;

  priority:
    | "low"
    | "medium"
    | "high";

  deadline?: string;

  estimated_hours?: number;
}