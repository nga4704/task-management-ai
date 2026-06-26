import { useEffect, useState } from "react";
import api from "@/lib/api";

export default function useDashboard(teamId: string) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (!teamId) return;

    api
      .get(`/dashboard/full/${teamId}`)
      .then((res) => setData(res.data))
      .catch(console.error);
  }, [teamId]);

  return {
    overview: data?.overview,
    sprintProgress: data?.sprintProgress,
    workload: data?.workload,
  };
}