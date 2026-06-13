import {
  useQuery,
} from "@tanstack/react-query";

import {
  projectService,
} from "../services/project.service";

export const useProject = (
  projectId: string
) => {
  return useQuery({
    queryKey: [
      "project",
      projectId,
    ],

    queryFn: () =>
      projectService.getProject(
        projectId
      ),

    enabled: !!projectId,
  });
};