import prisma from "../../config/prisma";
import { getIO } from "../../config/socket";
import { mapProjectList } from "../../modules/project/project.mapper";
import { AppError } from "../../middlewares/error.middleware";

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
    throw new AppError(
      "Workspace slug already exists",
      409
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



export const getTeamsService =
  async (userId: string) => {

    const teams =
      await prisma.teams.findMany({

        where: {
          team_members: {
            some: {
              user_id: userId,
            },
          },
        },

        include: {
          _count: {
            select: {
              team_members: true,
            },
          },
        },
      });

    return teams.map(
      (team) => ({
        ...team,

        members_count:
          team._count
            .team_members,
      })
    );
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

export const addMemberService =
  async (
    teamId: string,
    email: string
  ) => {

    const team =
      await prisma.teams.findUnique({
        where: {
          id: teamId,
        },
      });

    if (!team) {
      throw new AppError(
        "Team not found",
        404
      );
    }

    const user =
      await prisma.users.findUnique({
        where: {
          email,
        },
      });

    if (!user) {
      throw new AppError(
        "User not found",
        404
      );
    }

    const existingMember =
      await prisma.team_members.findFirst({
        where: {
          team_id: teamId,
          user_id: user.id,
        },
      });

    if (existingMember) {
      throw new AppError(
        "Member already exists",
        409
      );
    }

    return prisma.team_members.create({
      data: {
        team_id: teamId,
        user_id: user.id,
        role: "member",
      },
    });
  };

export const removeMemberService = async (
  teamId: string,
  userId: string
) => {

  const member =
    await prisma.team_members.findFirst({
      where: {
        team_id: teamId,
        user_id: userId,
      },
    });

  if (!member) {
    throw new AppError(
      "Member not found",
      404
    );
  }

  if (member.role === "owner") {
    throw new AppError(
      "Owner cannot be removed",
      403
    );
  }

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

export const getTeamProjectsService =
  async (teamId: string) => {
    const projects =
      await prisma.projects.findMany({
        where: {
          team_id: teamId,
        },

        include: {
          tasks: true,

          teams: {
            include: {
              team_members: true,
            },
          },
        },

        orderBy: {
          created_at: "desc",
        },
      });

    return projects.map(
      mapProjectList
    );
  };