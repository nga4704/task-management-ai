import { useQuery }
from "@tanstack/react-query";

import { projectApi }
from "../api/projectApi";

import type { ProjectDashboard }
from "../types/projectDashboard.types";

export function useProjectsDashboard() {
  return useQuery<ProjectDashboard>({
    queryKey: [
      "projects-dashboard",
    ],

    queryFn: () =>
      projectApi.getProjectsDashboard(),
  });
}