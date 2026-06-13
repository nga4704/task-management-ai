import { useQuery } from "@tanstack/react-query";

import { getTeamProjects } from "../api/projectApi";

export const useTeamProjects = (
  teamId?: string
) => {
  return useQuery({
    queryKey: [
      "team-projects",
      teamId,
    ],

    queryFn: () =>
      getTeamProjects(teamId!),

    enabled: !!teamId,
  });
};