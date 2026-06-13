import apiClient from "@/lib/api";

import type { Project } from "../types/project.types";

export const getTeamProjects =
  async (
    teamId: string
  ): Promise<Project[]> => {
    const response =
      await apiClient.get(
        `/teams/${teamId}/projects`
      );

    return response.data;
  };
export const projectApi = {
  getProjects: () =>
    apiClient.get("/projects"),

  getProjectById: (
    projectId: string
  ) =>
    apiClient.get(
      `/projects/${projectId}`
    ),

  createProject: (
    payload: {
      name: string;
      description?: string;
      teamId: string;
      status: string;
      startDate?: string;
      endDate?: string;
    }
  ) =>
    apiClient.post(
      "/projects",
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

