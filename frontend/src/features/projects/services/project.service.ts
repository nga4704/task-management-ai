import { projectApi } from "../api/projectApi.ts";
import api from "@/lib/api";

export const projectService = {
  getProjects: async () => {
    const res =
      await projectApi.getProjects();

    return res.data;
  },

  getProject: async (
    projectId: string
  ) => {
    const res =
      await projectApi.getProjectById(
        projectId
      );

    return res.data;
  },
};

export const getProjectsByTeam = (
  teamId: string
) => {
  return api.get(
    `/projects/team/${teamId}`
  );
};