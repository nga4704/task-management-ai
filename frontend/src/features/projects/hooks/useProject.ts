import { useQuery } from "@tanstack/react-query";
import { projectApi } from "../api/projectApi";

export const useProject = (projectId: string) => {
  return useQuery({
    queryKey: ["project", projectId],
    queryFn: async () => {
      return projectApi.getProjectDetail(projectId);
    },
    enabled: !!projectId,
  });
};