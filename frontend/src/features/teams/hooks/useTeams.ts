import { useQuery }
  from "@tanstack/react-query";

import { getTeams }
  from "../api/teamApi";

import type { Team }
  from "../types/team.types";

export const useTeams = () => {
  return useQuery<Team[]>({
    queryKey: ["teams"],

    queryFn: getTeams,
  });
};