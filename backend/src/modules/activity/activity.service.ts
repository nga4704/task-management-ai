import prisma from "../../config/prisma";
import { ActivityType } from "./activity.types";

type CreateActivityDTO = {
  teamId: string;
  projectId: string;
  taskId?: string;
  actorId: string;
  type: ActivityType;
  payload?: any;
};

export const createActivity = async (data: CreateActivityDTO) => {
  return prisma.project_activities.create({
    data: {
      team_id: data.teamId,
      project_id: data.projectId,
      task_id: data.taskId,
      actor_id: data.actorId,
      type: data.type,
      payload: data.payload,
    },
  });
};