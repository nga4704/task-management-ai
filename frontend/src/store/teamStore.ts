import { create } from "zustand";

import {
  persist,
} from "zustand/middleware";

interface TeamStore {
  selectedTeamId: string | null;
  selectedTeamName: string | null;

  setSelectedTeam: (
    id: string,
    name: string
  ) => void;

  clearSelectedTeam: () => void;
}

export const useTeamStore =
  create<TeamStore>()(
    persist(
      (set) => ({
        selectedTeamId: null,
        selectedTeamName: null,

        setSelectedTeam: (
          id,
          name
        ) =>
          set({
            selectedTeamId: id,
            selectedTeamName: name,
          }),

        clearSelectedTeam: () =>
          set({
            selectedTeamId: null,
            selectedTeamName: null,
          }),
      }),

      {
        name: "team-storage",
      }
    )
  );