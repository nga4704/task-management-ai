import { Request, Response } from "express";
import { asyncHandler } from "../../utils/asyncHandler";
import {
    createInviteService,
    acceptInviteService,
} from "./invite.service";
import { AuthRequest } from "../../middlewares/auth.middleware";

export const createInvite = asyncHandler(
    async (req: AuthRequest, res: Response) => {
        const teamId = req.params.teamId as string;
        const { email } = req.body;

        if (!teamId) {
            throw new Error("Invalid teamId");
        }

        const invite = await createInviteService(
            teamId,
            email,
            req.user!.id
        );

        res.json(invite);
    }
);

export const acceptInvite = asyncHandler(
    async (req: AuthRequest, res: Response) => {
        const token = req.params.token as string;

        if (!token) {
            throw new Error("Invalid token");
        }

        const result = await acceptInviteService(
            token,
            req.user!.id
        );

        res.json(result);
    }
);