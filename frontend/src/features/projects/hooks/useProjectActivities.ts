import { useQuery } from "@tanstack/react-query";
import { projectApi } from "../api/projectApi";

export const useProjectActivities = (projectId: string) => {
  return useQuery({
    queryKey: ["project-activities", projectId],
    queryFn: () => projectApi.getProjectActivities(projectId),
    enabled: !!projectId,
  });
};