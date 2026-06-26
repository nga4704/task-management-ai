import { useQuery } from "@tanstack/react-query";
import { getTeamMembersStats } from "@/features/teams/api/teamApi";

import type { TeamMemberStats } from "@/features/teams/types/team.types";

export const useTeamMembersStats = (teamId: string) => {
  return useQuery<TeamMemberStats[]>({
    queryKey: ["team-members-stats", teamId],
    queryFn: () => getTeamMembersStats(teamId),
    enabled: !!teamId,
  });
};