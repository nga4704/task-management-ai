import { useQuery } from "@tanstack/react-query";

import { projectApi } from "@/features/projects/api/projectApi";

import type {
  ProjectDetail,
} from "../types/projectDetail.types";

export function useProjectDetail(projectId?: string) {
  return useQuery<ProjectDetail>({
    queryKey: ["project-detail", projectId],

    queryFn: () =>
      projectApi.getProjectDetail(projectId!),

    enabled: !!projectId,

    retry: false,
  });
}