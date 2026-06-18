import { useQuery } from "@tanstack/react-query";
import { projectApi } from "../api/projectApi";

export const useProject = (projectId: string) => {
  return useQuery({
    queryKey: ["project", projectId],
    queryFn: async () => {
      const res = await projectApi.getProjectById(projectId);
      return res.data;
    },
    enabled: !!projectId,
  });
};