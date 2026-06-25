import prisma from "../../config/prisma";
import { AppError } from "../../middlewares/error.middleware";
import { sendInviteEmail } from "./invite.mail";
import { v4 as uuidv4 } from "uuid";

export const createInviteService = async (
  teamId: string,
  email: string,
  userId: string
) => {
  const token = uuidv4();

  const user = await prisma.users.findUnique({
    where: { id: userId },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  if (user.email === email) {
    throw new AppError("You cannot invite yourself", 400);
  }

  const member = await prisma.team_members.findFirst({
    where: {
      team_id: teamId,
      user_id: userId,
    },
  });

  if (!member || member.role !== "owner") {
    throw new AppError("Forbidden", 403);
  }

  const invite = await prisma.team_invites.create({
    data: {
      team_id: teamId,
      email,
      token,
      invited_by: userId,
      expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    },
  });

  const team = await prisma.teams.findUnique({
    where: { id: teamId },
  });

  if (!team) {
    throw new AppError("Team not found", 404);
  }

  const inviteLink = `${process.env.FRONTEND_URL}/invite?token=${token}`;

  await sendInviteEmail({
    email,
    teamName: team.name,
    inviteLink,
  });

  return invite;
};

export const acceptInviteService = async (
  token: string,
  userId: string
) => {
  const invite = await prisma.team_invites.findUnique({
    where: { token },
  });

  if (!invite) throw new AppError("Invite not found", 404);

  if (invite.status !== "PENDING") {
    throw new AppError("Invite already used", 400);
  }

  if (invite.expires_at < new Date()) {
    throw new AppError("Invite expired", 400);
  }

  // check user email match
  const user = await prisma.users.findUnique({
    where: { id: userId },
  });

  if (!user || user.email !== invite.email) {
    throw new AppError("This invite is not for your account", 403);
  }

  const existing = await prisma.team_members.findFirst({
    where: {
      team_id: invite.team_id,
      user_id: userId,
    },
  });

  if (!existing) {
    await prisma.team_members.create({
      data: {
        team_id: invite.team_id,
        user_id: userId,
      },
    });
  }

  // update invite
  await prisma.team_invites.update({
    where: { id: invite.id },
    data: { status: "ACCEPTED" },
  });

  return { success: true };
};