import prisma from "../config/prisma";
import { Response, NextFunction }
from "express";

import { AuthRequest }
from "./auth.middleware";

export const isProjectMember =
async (
 req: AuthRequest,
 res: Response,
 next: NextFunction
) => {

const projectId = Array.isArray(req.params.projectId)
  ? req.params.projectId[0]
  : req.params.projectId;

 const userId =
   req.user?.id;

 const project =
  await prisma.projects.findUnique({
    where: {
      id: projectId as string
    },

    include: {
      teams: {
        include: {
          team_members: true
        }
      }
    }
  });

 if (!project) {
   return res.status(404).json({
     message: "Project not found"
   });
 }

const isMember =
  project?.teams?.team_members?.some(
    (m) => m.user_id === userId
  );

 if (!isMember) {
   return res.status(403).json({
     message: "Forbidden"
   });
 }

 next();
};