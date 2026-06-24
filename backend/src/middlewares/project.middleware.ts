import prisma from "../config/prisma";
import { Response, NextFunction }
from "express";

import { AuthRequest }
from "./auth.middleware";

export const isProjectMember = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const projectId = req.params.projectId as string;
  const userId = req.user?.id;

  if (!userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const project = await prisma.projects.findUnique({
    where: { id: projectId },
    include: {
      teams: true,
    },
  });

  if (!project) {
    return res.status(404).json({ message: "Project not found" });
  }

  // 🔥 CORE FIX: check team ownership first
  const team = await prisma.teams.findUnique({
    where: { id: project.team_id },
  });

  if (!team) {
    return res.status(404).json({ message: "Team not found" });
  }

  const isOwner = team.owner_id === userId;

  const member = await prisma.team_members.findFirst({
    where: {
      team_id: project.team_id,
      user_id: userId,
    },
  });

  const isAdmin = member?.role === "admin";

  const isMember = !!member;

  // 🔥 FINAL RULE:
  // owner OR admin OR member đều được access project
  if (!isOwner && !isAdmin && !isMember) {
    return res.status(403).json({ message: "Forbidden" });
  }

  next();
};