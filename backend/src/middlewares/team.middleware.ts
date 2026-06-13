import {
  Request,
  Response,
  NextFunction,
} from "express";

import prisma from "../config/prisma";

import { AuthRequest }
from "./auth.middleware";

export const isTeamMember =
  async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ) => {

    const teamId =
      req.params.teamId as string;

    const userId =
      req.user?.id as string;

    const member =
      await prisma.team_members.findFirst({
        where: {
          team_id: teamId,
          user_id: userId,
        },
      });

    if (!member) {

      return res.status(403).json({
        message: "Forbidden",
      });
    }

    next();
  };

  export const isTeamOwner =
  async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ) => {

    const teamId =
      req.params.teamId as string;

    const userId =
      req.user?.id as string;

    const team =
      await prisma.teams.findUnique({
        where: {
          id: teamId,
        },
      });

    if (!team) {

      return res.status(404).json({
        message: "Team not found",
      });
    }

    if (team.owner_id !== userId) {

      return res.status(403).json({
        message: "Only owner can do this",
      });
    }

    next();
  };