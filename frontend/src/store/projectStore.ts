import { create } from "zustand";

import {
  persist,
} from "zustand/middleware";

interface ProjectStore {
  selectedProjectId: string | null;
  selectedProjectName: string | null;

  setSelectedProject: (
    id: string,
    name: string
  ) => void;

  clearSelectedProject: () => void;
}

export const useProjectStore =
  create<ProjectStore>()(
    persist(
      (set) => ({
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

        clearSelectedProject: () =>
          set({
            selectedProjectId: null,
            selectedProjectName: null,
          }),
      }),

      {
        name: "project-storage",
      }
    )
  );