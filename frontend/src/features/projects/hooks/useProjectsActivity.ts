import { useQuery }
from "@tanstack/react-query";

import { projectApi }
from "../api/projectApi";

import type { ProjectActivity }
from "../types/projectDashboard.types";

export function useProjectsActivity() {
return useQuery<ProjectActivity[]>({
    queryKey: [
      "projects-activity",
    ],

    queryFn: () =>
      projectApi.getProjectsActivity(),
  });
}