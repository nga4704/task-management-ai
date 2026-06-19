import apiClient from "@/lib/api";

export const projectApi = {
  async getTeamProjects(teamId: string) {
    const { data } = await apiClient.get(
      `/teams/${teamId}/projects`
    );
    return data;
  },

  async getProjectDetail(projectId: string) {
    const { data } = await apiClient.get(
      `/projects/${projectId}`
    );
    return data;
  },

  async createProject(
    teamId: string,
    payload: {
      name: string;
      description?: string;
      status: string;
      startDate?: string;
      endDate?: string;
    }
  ) {
    const { data } = await apiClient.post(
      `/projects/teams/${teamId}/projects`,
      payload
    );
    return data;
  },

  async updateProject(
    projectId: string,
    payload: any
  ) {
    const { data } = await apiClient.put(
      `/projects/${projectId}`,
      payload
    );
    return data;
  },

  async deleteProject(projectId: string) {
    const { data } = await apiClient.delete(
      `/projects/${projectId}`
    );
    return data;
  },
};