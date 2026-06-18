import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import api from "@/lib/api";

export function useProjectDetail() {
  const { projectId } = useParams();

  return useQuery({
    queryKey: ["project", projectId],
    queryFn: async () => {
      const res = await api.get(`/projects/${projectId}`);
      return res.data;
    },
    enabled: !!projectId,
  });
}