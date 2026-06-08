import { create } from "zustand";

interface WorkspaceState {
  selectedProjectId: string | null;

  selectedTeamId: string | null;

  setSelectedProject: (
    projectId: string
  ) => void;

  setSelectedTeam: (
    teamId: string
  ) => void;

  clearWorkspace: () => void;
}

export const useWorkspaceStore =
  create<WorkspaceState>((set) => ({
    selectedProjectId: null,

    selectedTeamId: null,

    setSelectedProject: (
      projectId
    ) =>
      set({
        selectedProjectId:
          projectId,
      }),

    setSelectedTeam: (
      teamId
    ) =>
      set({
        selectedTeamId:
          teamId,
      }),

    clearWorkspace: () =>
      set({
        selectedProjectId: null,
        selectedTeamId: null,
      }),
  }));