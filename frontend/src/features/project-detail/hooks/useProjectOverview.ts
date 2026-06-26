import { useQuery } from "@tanstack/react-query";
import { projectApi } from "@/features/projects/api/projectApi";

export function useProjectOverview(projectId?: string) {
  return useQuery({
    queryKey: ["project-overview", projectId],
    enabled: !!projectId,

    queryFn: async () => {
      const [project, tasks, activities] = await Promise.all([
        projectApi.getProjectDetail(projectId!),
        projectApi.getProjectTasks(projectId!),
        projectApi.getProjectActivities(projectId!),
      ]);

      return {
        project,
        tasks,
        activities,
      };
    },
  });
}