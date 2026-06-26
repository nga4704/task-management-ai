export type ProjectActivity = {
  id: string;
  team_id: string;
  project_id: string;
  task_id?: string | null;

  actor_id: string;
  type: string;
  payload?: any;

  created_at: string;
};