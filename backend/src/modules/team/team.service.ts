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

  const normalizedSlug =
    slug
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-");

  /*
  -----------------------------
  CHECK SLUG EXISTS
  -----------------------------
  */

  const existing =
    await prisma.teams.findUnique({
      where: {
        slug: normalizedSlug,
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
  CREATE TEAM   ADD OWNER   INVITE MEMBERS
  -----------------------------
  */

  let team;

  try {

    team =
      await prisma.$transaction(
        async (tx) => {

          const createdTeam =
            await tx.teams.create({
              data: {
                name,
                slug: normalizedSlug,
                description,
                owner_id: ownerId,
              },
            });

          await tx.team_members.create({
            data: {
              team_id: createdTeam.id,
              user_id: ownerId,
              role: "owner",
            },
          });

          if (
            invitedMembers.length > 0
          ) {

            const users =
              await tx.users.findMany({
                where: {
                  email: {
                    in: invitedMembers,
                  },
                },
              });

            if (
              users.length > 0
            ) {

              await tx.team_members.createMany({
                data: users.map(
                  (user) => ({
                    team_id:
                      createdTeam.id,
                    user_id:
                      user.id,
                    role:
                      "member",
                  })
                ),

                skipDuplicates:
                  true,
              });
            }
          }

          return createdTeam;
        }
      );

  } catch (error: any) {

    if (
      error.code === "P2002"
    ) {
      throw new AppError(
        "Workspace slug already exists",
        409
      );
    }

    throw error;
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

  const existing =
    await prisma.teams.findUnique({
      where: {
        id: teamId,
      },
    });

  if (!existing) {
    throw new AppError(
      "Team not found",
      404
    );
  }

  const team =
    await prisma.teams.update({
      where: {
        id: teamId,
      },

      data: {

        ...(name && {
          name,
        }),

        ...(description !== undefined && {
          description,
        }),

      },
    });

  const io = getIO();

  io.emit(
    "teamUpdated",
    team
  );

  return team;
};

export const deleteTeamService = async (teamId: string) => {

  // delete team members first
  // await prisma.team_members.deleteMany({
  //   where: {
  //     team_id: teamId,
  //   },
  // });

  // const deleted = await prisma.teams.delete({
  //   where: { id: teamId },
  // });

  const deleted =
    await prisma.$transaction(
      async (tx) => {

        await tx.team_members.deleteMany({
          where: {
            team_id: teamId,
          },
        });

        return tx.teams.delete({
          where: {
            id: teamId,
          },
        });
      }
    );

  const io = getIO();
  io.emit("teamDeleted", teamId);

  return deleted;
};

export const addMemberService =
  async (
    teamId: string,
    email: string
  ) => {

    const normalizedEmail =
      email
        .trim()
        .toLowerCase();

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
          email: normalizedEmail,
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

  if (team.owner_id === userId) {
    throw new AppError(
      "Owner cannot be removed",
      403
    );
  }

  if (!member) {
    throw new AppError(
      "Member not found",
      404
    );
  }

  // if (member.role === "owner") {
  //   throw new AppError(
  //     "Owner cannot be removed",
  //     403
  //   );
  // }

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