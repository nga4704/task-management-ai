export const tasksQueryKey = (params: any) => [
  "tasks",
  params.scope,
  params.projectId,
  params.teamId,
  params.filters?.status,
  params.filters?.priority,
  params.filters?.search,
  params.filters?.assignee,
  params.filters?.aiRisk,
];