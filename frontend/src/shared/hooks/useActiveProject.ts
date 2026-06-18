import {
  useProjectStore,
} from "@/store/projectStore";

export const useActiveProject =
  () => {

    const projectId =
      useProjectStore(
        (state) =>
          state.selectedProjectId
      );

    const projectName =
      useProjectStore(
        (state) =>
          state.selectedProjectName
      );

    return {
      projectId,
      projectName,
    };
  };