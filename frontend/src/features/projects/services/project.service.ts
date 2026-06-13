import { projectApi } from "../api/projectApi.ts";

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