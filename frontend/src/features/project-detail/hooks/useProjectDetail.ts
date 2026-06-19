import { useQuery } from "@tanstack/react-query";
import { projectApi } from "../../projects/api/projectApi";

export function useProjectDetail(projectId?: string) {
  return useQuery({
    queryKey: ["project", projectId],
    queryFn: () => projectApi.getProjectDetail(projectId!),
    enabled: !!projectId,
  });
}