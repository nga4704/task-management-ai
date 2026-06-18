import { useQuery }
from "@tanstack/react-query";

import {
  projectApi,
} from "../api/projectApi";

export const useTeamProjects =
  (teamId?: string) => {

    return useQuery({
      queryKey: [
        "team-projects",
        teamId,
      ],

      queryFn: async () => {
        const res =
          await projectApi.getTeamProjects(
            teamId as string
          );

        return res.data;
      },

      enabled: !!teamId,
    });
  };