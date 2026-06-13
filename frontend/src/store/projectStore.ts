
import { create } from "zustand";

interface ProjectState {
  selectedProjectId: string | null;

  selectedProjectName: string | null;

  setSelectedProject: (
    id: string,
    name: string
  ) => void;
}

export const useProjectStore =
  create<ProjectState>((set) => ({
    selectedProjectId: null,

    selectedProjectName: null,

    setSelectedProject: (
      id,
      name
    ) =>
      set({
        selectedProjectId: id,
        selectedProjectName: name,
      }),
  }));

