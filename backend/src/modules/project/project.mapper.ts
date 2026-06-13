import {
  calculateAIScore,
  calculateProgress,
} from "./project.utils";

export const mapProjectList =
(
  project: any
) => ({
  id: project.id,

  name: project.name,

  description:
    project.description,

  status: project.status,

  progress:
    calculateProgress(
      project.tasks
    ),

  taskCount:
    project.tasks.length,

  memberCount:
    project.teams
      ?.team_members?.length || 0,

  aiScore:
    calculateAIScore(
      project.tasks
    ),

  startDate:
    project.start_date,

  endDate:
    project.end_date,

  createdAt:
    project.created_at,
});