import api from "@/lib/api";

import type {
  DashboardResponse,
} from "../types/dashboard.types";

export const getDashboard = (
  teamId: string
) => {

  return api.get<DashboardResponse>(
    `/dashboard/full/${teamId}`
  );

};

export const getOverview = (
  teamId: string
) => {

  return api.get(
    `/dashboard/overview?teamId=${teamId}`
  );

};