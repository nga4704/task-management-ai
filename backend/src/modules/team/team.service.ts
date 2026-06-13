import prisma from "../../config/prisma";
import { getIO } from "../../config/socket";

export const createTeamService = async (
  payload: {
    name: string;
    slug: string;
    description?: string;
    invitedMembers?: string[];
  },
  ownerId: string
) => {
  const {
    name,
    slug,
    description,
    invitedMembers = [],
  } = payload;

  /*
  -----------------------------
  CHECK SLUG EXISTS
  -----------------------------
  */

  const existing =
    await prisma.teams.findUnique({
      where: {
        slug,
      },
    });

  if (existing) {
    throw new Error(
      "Workspace slug already exists"
    );
  }

  /*
  -----------------------------
  CREATE TEAM
  -----------------------------
  */

  const team =
    await prisma.teams.create({
      data: {
        name,
        slug,
        description,
        owner_id: ownerId,
      },
    });

  /*
  -----------------------------
  ADD OWNER
  -----------------------------
  */

  await prisma.team_members.create({
    data: {
      team_id: team.id,
      user_id: ownerId,
      role: "owner",
    },
  });

  /*
  -----------------------------
  INVITE MEMBERS
  -----------------------------
  */

  if (invitedMembers.length > 0) {
    const users =
      await prisma.users.findMany({
        where: {
          email: {
            in: invitedMembers,
          },
        },
      });

    if (users.length > 0) {
      await prisma.team_members.createMany({
        data: users.map((user) => ({
          team_id: team.id,
          user_id: user.id,
          role: "member",
        })),
        skipDuplicates: true,
      });
    }
  }

  const io = getIO();

  io.emit("teamCreated", team);

  return team;
};



export const getTeamsService = async () => {
    return prisma.teams.findMany({
        include: {
            team_members: true,
        },
    });
};

export const getTeamDetailService = async (teamId: string) => {
    return prisma.teams.findUnique({
        where: {
            id: teamId,
        },
        include: {
            team_members: {
                include: {
                    users: true,
                },
            },
        },
    });
};

export const updateTeamService = async (
    teamId: string,
    name: string,
    description: string
) => {
    const team = await prisma.teams.update({
        where: { id: teamId },
        data: { name, description },
    });
    const io = getIO();
    io.emit("teamUpdated", team);

    return team;
};

export const deleteTeamService = async (teamId: string) => {

    // delete team members first
    await prisma.team_members.deleteMany({
        where: {
            team_id: teamId,
        },
    });

    const deleted = await prisma.teams.delete({
        where: { id: teamId },
    });


    const io = getIO();
    io.emit("teamDeleted", teamId);

    return deleted;
};

export const addMemberService = async (
    teamId: string,
    userId: string
) => {

    const member = await prisma.team_members.create({
        data: {
            team_id: teamId,
            user_id: userId,
            role: "member",
        },
    });

    const io = getIO();
    io.emit("memberAdded", {
        teamId,
        userId,
        member,
    });

    return member;
};

export const removeMemberService = async (
    teamId: string,
    userId: string
) => {

    await prisma.team_members.deleteMany({
        where: {
            team_id: teamId,
            user_id: userId,
        },
    });

    const io = getIO();
    io.emit("memberRemoved", {
        teamId,
        userId,
    });
};