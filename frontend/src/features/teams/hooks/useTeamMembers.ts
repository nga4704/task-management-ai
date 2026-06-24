import { useQuery } from "@tanstack/react-query";
import { getTeamDetail } from "../api/teamApi";

export const useTeamMembers = (teamId: string) => {
  return useQuery({
    queryKey: ["team-members", teamId],

    queryFn: async () => {
      const res = await getTeamDetail(teamId);
      return res.team_members; // lấy từ backend include
    },

    enabled: !!teamId,
  });
};