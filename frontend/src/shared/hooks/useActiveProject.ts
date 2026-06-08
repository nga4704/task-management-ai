import {
  useWorkspaceStore,
} from "@/store/workspaceStore";

export const useActiveProject =
  () => {

    const projectId =
      useWorkspaceStore(
        (state) =>
          state.selectedProjectId
      );

    return {
      projectId,
    };
  };