import axiosClient from "@/shared/lib/apiClient";

import type { Team }
  from "../types/team.types";

export const getTeams = async (): Promise<Team[]> => {
  const response = await axiosClient.get("/teams");

  return response.data;
};

export const createTeam = async (
  payload: {
    name: string;
    description?: string;
  }
): Promise<Team> => {
  const response = await axiosClient.post(
    "/teams",
    payload
  );

  return response.data;
};