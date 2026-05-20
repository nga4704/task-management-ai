import prisma from "../config/prisma";

export const createTeamService = async (
    name: string,
    description: string,
    ownerId: string
) => {

    // create new team
    const team = await prisma.teams.create({
        data: {
            name,
            description,
            owner_id: ownerId,
        },
    });

    // add owner into team_members
    await prisma.team_members.create({
        data: {
            team_id: team.id,
            user_id: ownerId,
            role: "owner",
        },
    });

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
    return prisma.teams.update({
        where: {
            id: teamId,
        },
        data: {
            name,
            description,
        },
    });
};

export const deleteTeamService = async (teamId: string) => {

    // delete team members first
    await prisma.team_members.deleteMany({
        where: {
            team_id: teamId,
        },
    });

    return prisma.teams.delete({
        where: {
            id: teamId,
        },
    });
};

export const addMemberService = async (
    teamId: string,
    userId: string
) => {

    return prisma.team_members.create({
        data: {
            team_id: teamId,
            user_id: userId,
            role: "member",
        },
    });
};

export const removeMemberService = async (
    teamId: string,
    userId: string
) => {

    return prisma.team_members.deleteMany({
        where: {
            team_id: teamId,
            user_id: userId,
        },
    });
};