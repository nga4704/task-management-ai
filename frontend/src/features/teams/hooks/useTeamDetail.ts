import {
  useQuery,
} from "@tanstack/react-query";

import {
  getTeamDetail,
} from "../api/teamApi";

export const useTeamDetail =
  (teamId?: string) => {

    return useQuery({
      queryKey: [
        "team",
        teamId,
      ],

      queryFn: () =>
        getTeamDetail(
          teamId as string
        ),

      enabled: !!teamId,
    });
  };