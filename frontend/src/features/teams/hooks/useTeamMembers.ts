import { useQuery } from "@tanstack/react-query";
import { getTeamMembers } from "../api/teamApi";

export const useTeamMembers = (
  teamId: string
) => {
  return useQuery({
    queryKey: ["team-members", teamId],

    queryFn: () =>
      getTeamMembers(teamId),

    enabled: !!teamId,
  });
};