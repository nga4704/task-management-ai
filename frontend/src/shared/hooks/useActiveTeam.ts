// shared/hooks/useActiveTeam.ts

import { useTeamStore } from "@/store/teamStore";

export const useActiveTeam = () => {
  const teamId = useTeamStore(
    (state) => state.selectedTeamId
  );

  const teamName = useTeamStore(
    (state) => state.selectedTeamName
  );

  return {
    teamId,
    teamName,
  };
};