import apiClient from "@/lib/api";

export const projectApi = {
  async createProject(teamId: string, payload: any) {
    const res = await apiClient.post(
      `/projects/teams/${teamId}/projects`,
      payload
    );
    return res.data;
  },

  async getTeamProjects(teamId: string) {
    const res = await apiClient.get(
      `/teams/${teamId}/projects`
    );

    return res.data;
  },

  async getProjectDetail(projectId: string) {
    const res = await apiClient.get(
      `/projects/${projectId}`
    );

    return res.data;
  },

  async updateProject(projectId: string, payload: any) {
    const res = await apiClient.put(
      `/projects/${projectId}`,
      payload
    );

    return res.data;
  },

  async deleteProject(projectId: string) {
    const res = await apiClient.delete(
      `/projects/${projectId}`
    );

    return res.data;
  },

  async getProjectsDashboard() {
    const res = await apiClient.get(
      "/projects/dashboard"
    );

    return res.data;
  },

  async getProjectsActivity() {
    const res = await apiClient.get(
      "/projects/activity"
    );

    return res.data;
  },
};