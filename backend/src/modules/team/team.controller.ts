import { Request, Response } from "express";
import {
  createTeamService,
  getTeamsService,
  getTeamDetailService,
  updateTeamService,
  deleteTeamService,
  addMemberService,
  removeMemberService,
  getTeamProjectsService,
  getTeamMembersService,
} from "./team.service";

import { AuthRequest } from "../../middlewares/auth.middleware";
import { AppError } from "../../middlewares/error.middleware";
import { asyncHandler } from "../../utils/asyncHandler";

import { validate as isUUID }
from "uuid";

// CREATE
export const createTeam = asyncHandler(async (req: AuthRequest, res: Response) => {

const teamId =
  req.params.teamId;

if (!isUUID(teamId)) {
  throw new AppError(
    "Invalid team id",
    400
  );
}

  if (!req.user) {
    throw new AppError("Unauthorized", 401);
  }

  const {
    name,
    slug,
    description,
    invitedMembers,
  } = req.body;

  if (!name?.trim()) {
    throw new AppError(
      "Team name is required",
      400
    );
  }

  if (!slug?.trim()) {
  throw new AppError(
    "Workspace slug is required",
    400
  );
}

  const team =
    await createTeamService(
      {
        name,
        slug,
        description,
        invitedMembers,
      },
      req.user.id
    );
  res.status(201).json({
    message: "Create team successfully",
    team,
  });
});

// GET ALL
export const getTeams =
  asyncHandler(async (
    req: AuthRequest,
    res: Response
  ) => {

    const teams =
      await getTeamsService(
        req.user!.id
      );

    res.status(200).json(
      teams
    );
  });

// DETAIL
export const getTeamDetail = asyncHandler(async (req: Request, res: Response) => {
  const teamId = req.params.teamId as string;

  const team = await getTeamDetailService(teamId);

  if (!team) {
    throw new AppError("Team not found", 404);
  }

  res.status(200).json(team);
});

// UPDATE
export const updateTeam = asyncHandler(async (req: Request, res: Response) => {
  const teamId = req.params.teamId as string;
  const { name, description } = req.body;

  const team = await updateTeamService(teamId, name, description);

  res.status(200).json({
    message: "Update team successfully",
    team,
  });
});

// DELETE
export const deleteTeam = asyncHandler(async (req: Request, res: Response) => {
  const teamId = req.params.teamId as string;

  await deleteTeamService(teamId);

  res.status(200).json({
    message: "Delete team successfully",
  });
});

// ADD MEMBER
export const addMember = asyncHandler(async (req: Request, res: Response) => {
  const teamId = req.params.teamId as string;
  const { email } = req.body;

  const member =
    await addMemberService(
      teamId,
      email
    );

  res.status(201).json({
    message: "Add member successfully",
    member,
  });
});

// REMOVE MEMBER
export const removeMember = asyncHandler(async (req: Request, res: Response) => {
  const teamId = req.params.teamId as string;
  const userId = req.params.userId as string;

  await removeMemberService(teamId, userId);

  res.status(200).json({
    message: "Remove member successfully",
  });
});

export const getTeamProjects = asyncHandler(async (req: Request, res: Response) => {
  const teamId = req.params.teamId;

  if (!teamId || Array.isArray(teamId)) {
    throw new AppError("Invalid teamId", 400);
  }

  const projects = await getTeamProjectsService(teamId);
  res.json(projects);
});

export const getTeamMembers = asyncHandler(async (req: Request, res: Response) => {
  const teamId = req.params.teamId as string;

  const members = await getTeamMembersService(teamId);

  res.json(members);
});