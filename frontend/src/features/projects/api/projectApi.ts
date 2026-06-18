import apiClient from "@/lib/api";

export const projectApi = {
  getTeamProjects: (
    teamId: string
  ) =>
    apiClient.get(
      `/teams/${teamId}/projects`
    ),

  getProjectById: (
    projectId: string
  ) =>
    apiClient.get(
      `/projects/${projectId}`
    ),

  createProject: (
    teamId: string,
    payload: {
      name: string;
      description?: string;
      status: string;
      startDate?: string;
      endDate?: string;
    }
  ) =>
    apiClient.post(
      `/projects/teams/${teamId}/projects`,
      payload
    ),

  updateProject: (
    projectId: string,
    payload: any
  ) =>
    apiClient.put(
      `/projects/${projectId}`,
      payload
    ),

  deleteProject: (
    projectId: string
  ) =>
    apiClient.delete(
      `/projects/${projectId}`
    ),
};