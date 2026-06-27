import { useProjectStore } from "@/store/projectStore";
import { useTeamStore } from "@/store/teamStore";

export const useActiveProject = () => {
  const projectId = useProjectStore(
    (s) => s.selectedProjectId
  );

  const projectName = useProjectStore(
    (s) => s.selectedProjectName
  );

  const teamId = useTeamStore(
    (s) => s.selectedTeamId
  );

  const teamName = useTeamStore(
    (s) => s.selectedTeamName
  );

  return {
    teamId,
    teamName,
    projectId,
    projectName,
  };
};