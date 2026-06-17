import axiosClient from "@/lib/api";

import type {
  Team, TeamDetail
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

export const getTeamDetail =
  async (
    teamId: string
  ): Promise<TeamDetail> => {

    const response =
      await axiosClient.get(
        `/teams/${teamId}`
      );

    return response.data;
  };

  export const addMember = async (
  teamId: string,
  userId: string
) => {

  const response =
    await axiosClient.post(
      `/teams/${teamId}/members`,
      {
        userId,
      }
    );

  return response.data;
};

export const removeMember = async (
  teamId: string,
  userId: string
) => {

  const response =
    await axiosClient.delete(
      `/teams/${teamId}/members/${userId}`
    );

  return response.data;
};

export const updateTeam = async (
  teamId: string,
  payload: {
    name: string;
    description?: string;
  }
) => {

  const response =
    await axiosClient.put(
      `/teams/${teamId}`,
      payload
    );

  return response.data;
};

export const deleteTeam = async (
  teamId: string
) => {

  const response =
    await axiosClient.delete(
      `/teams/${teamId}`
    );

  return response.data;
};