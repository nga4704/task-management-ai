import { create } from "zustand";

interface ProjectState {
  selectedProjectId: string | null;
  selectedProjectName: string | null;

  setSelectedProject: (
    projectId: string,
    projectName: string
  ) => void;

  clearProject: () => void;
}

export const useProjectStore =
  create<ProjectState>((set) => ({
    selectedProjectId: null,
    selectedProjectName: null,

    setSelectedProject: (
      projectId,
      projectName
    ) =>
      set({
        selectedProjectId: projectId,
        selectedProjectName: projectName,
      }),

    clearProject: () =>
      set({
        selectedProjectId: null,
        selectedProjectName: null,
      }),
  }));