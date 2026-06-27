import { useEffect, useState } from "react";

import api from "@/lib/api";

import type {
  DashboardResponse,
} from "../types/dashboard.types";

export default function useDashboard(
  teamId: string
) {

  const [data, setData] =
    useState<DashboardResponse | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  useEffect(() => {
    if (!teamId) {
      console.log("No teamId");
      setLoading(false);
      return;
    }

    const fetchDashboard = async () => {
      try {
        setLoading(true);

        console.log("teamId =", teamId);

        const res = await api.get(`/dashboard/full/${teamId}`);

        console.log("Dashboard response:", res.data);

        setData(res.data);
      } catch (err) {
        console.error("Dashboard error:", err);
        setError("Unable to load dashboard.");
      } finally {
        console.log("Loading finished");
        setLoading(false);
      }
    };

    fetchDashboard();
  }, [teamId]);

  return {

    overview:
      data?.overview,

    sprintProgress:
      data?.sprintProgress,

    tasks:
      data?.tasks ?? [],

    activities:
      data?.activities ?? [],

    insights:
      data?.insights,

    loading,

    error,

  };

}