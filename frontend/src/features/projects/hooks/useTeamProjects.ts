import { useQuery }
from "@tanstack/react-query";

import {
  projectApi,
} from "../api/projectApi";

type Project = {
  id: string;
  name: string;
};

export const useTeamProjects = (teamId?: string) => {
  return useQuery<Project[]>({
    queryKey: ["team-projects", teamId],

    queryFn: async () => {
      if (!teamId) return [];

      return projectApi.getTeamProjects(teamId);
    },

    enabled: !!teamId,
  });
};