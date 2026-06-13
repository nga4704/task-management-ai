import axiosClient from "@/lib/api";

import type {
  Team,
} from "../types/team.types";

export const getTeams =
  async (): Promise<Team[]> => {
    const response =
      await axiosClient.get(
        "/teams"
      );

    return response.data;
  };

  interface CreateTeamPayload {
  name: string;
  slug: string;
  description?: string;
  invitedMembers?: string[];
}

interface CreateTeamResponse {
  message: string;
  team: Team;
}

export const createTeam = async (
  payload: CreateTeamPayload
): Promise<CreateTeamResponse> => {

  const response =
    await axiosClient.post(
      "/teams",
      payload
    );

  return response.data;
};