import { useQuery } from "@tanstack/react-query";
import { projectApi } from "../api/projectApi";
import type { ProjectDashboard } from "../types/projectDashboard.types";

export function useProjectsDashboard(teamId?: string) {
  return useQuery<ProjectDashboard>({
    queryKey: ["projects-dashboard", teamId],

    queryFn: () => projectApi.getProjectsDashboard(teamId!),

    enabled: !!teamId,
  });
}