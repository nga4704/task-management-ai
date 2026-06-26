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
      `/projects/teams/${teamId}/projects`
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

  async getProjectsDashboard(teamId: string) {
    const res = await apiClient.get(
      `/teams/${teamId}/dashboard`
    );

    return res.data;
  },

  async getProjectsActivity() {
    const res = await apiClient.get(
      "/projects/activity"
    );

    return res.data;
  },

  async getProjectTasks(projectId: string) {
    const res = await apiClient.get(
      `/projects/${projectId}/tasks`
    );
    return res.data;
  },

  async getProjectActivities(projectId: string) {
    const res = await apiClient.get(
      `/projects/${projectId}/activities`
    );
    return res.data;
  },

  async getProjectOverview(
    projectId: string
  ) {

    const res =
      await apiClient.get(
        `/projects/${projectId}/overview`
      );

    return res.data;

  },
};

