import { useQuery } from "@tanstack/react-query";

import { projectApi } from "@/features/projects/api/projectApi";

export function useProjectOverview(
  projectId?: string
) {

  return useQuery({

    queryKey: [
      "project-overview",
      projectId,
    ],

    queryFn: () =>
      projectApi.getProjectOverview(
        projectId!
      ),

    enabled:
      !!projectId,

  });

}