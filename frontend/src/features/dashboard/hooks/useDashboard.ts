import { useEffect, useState } from "react";

import { getOverview } from "../services/dashboard.service";

export default function useDashboard(
  teamId: string
) {
  const [overview, setOverview] =
    useState<any>(null);

  useEffect(() => {
    if (!teamId) return;

    getOverview(teamId).then((res) =>
      setOverview(res.data)
    );
  }, [teamId]);

  return {
    overview,
  };
}