import { Request, Response } from "express";
import {
    createTeamService,
    getTeamsService,
    getTeamDetailService,
    updateTeamService,
    deleteTeamService,
    addMemberService,
    removeMemberService,
} from "../services/team.service";
import { AuthRequest } from "../middlewares/auth.middleware";

// CREATE TEAM
export const createTeam = async (
    req: AuthRequest,
    res: Response
) => {

    try {

        const { name, description } = req.body;

        const ownerId = req.userId!;

        const team = await createTeamService(
            name,
            description,
            ownerId
        );

        res.status(201).json({
            message: "Create team successfully",
            team,
        });

    } catch (error) {
         
        res.status(500).json({
            message: "Server error",
        });
    }
};

export const getTeams = async (
    req: Request,
    res: Response
) => {

    try {

        const teams = await getTeamsService();

        res.json(teams);

    } catch (error) {

        res.status(500).json({
            message: "Server error",
        });
    }
};

export const getTeamDetail = async (
    req: Request,
    res: Response
) => {

    try {

        const teamId = req.params.teamId as string;

        const team = await getTeamDetailService(teamId);

        if (!team) {
            return res.status(404).json({
                message: "Team not found",
            });
        }

        res.json(team);

    } catch (error) {

        res.status(500).json({
            message: "Server error",
        });
    }
};

export const updateTeam = async (
    req: Request,
    res: Response
) => {

    try {

        const teamId = req.params.teamId as string;

        const { name, description } = req.body;

        const team = await updateTeamService(
            teamId,
            name,
            description
        );

        res.json({
            message: "Update team successfully",
            team,
        });

    } catch (error) {

        res.status(500).json({
            message: "Server error",
        });
    }
};

export const deleteTeam = async (
    req: Request,
    res: Response
) => {

    try {

        const teamId = req.params.teamId as string;

        await deleteTeamService(teamId);

        res.json({
            message: "Delete team successfully",
        });

    } catch (error) {

        res.status(500).json({
            message: "Server error",
        });
    }
};

export const addMember = async (
    req: Request,
    res: Response
) => {

    try {

        const teamId = req.params.teamId as string;

        const { userId } = req.body;

        const member = await addMemberService(
            teamId,
            userId
        );

        res.status(201).json({
            message: "Add member successfully",
            member,
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server error",
        });
    }
};

export const removeMember = async (
    req: Request,
    res: Response
) => {

    try {
        const teamId = req.params.teamId as string;
        const userId = req.params.userId as string;

        await removeMemberService(
            teamId,
            userId
        );

        res.json({
            message: "Remove member successfully",
        });

    } catch (error) {

        res.status(500).json({
            message: "Server error",
        });
    }
};