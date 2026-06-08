import prisma from "../../config/prisma";

import aiClient from "../../utils/aiClient";

export const predictOverdueService = async (
  taskId: string
) => {

  // find task
  const task = await prisma.tasks.findUnique({
    where: {
      id: taskId,
    },
  });

  if (!task) {
    throw new Error("Task not found");
  }

  // send task data to FastAPI
  const response = await aiClient.post(
    "/predict-overdue",
    {
      progress: task.progress,
      priority: task.priority,
      status: task.status,
      deadline: task.deadline,
    }
  );

  const result = response.data;

  // save prediction
  await prisma.ai_predictions.create({
    data: {
      task_id: taskId,
      overdue_risk: result.overdueRisk,
      predicted_status: result.predictedStatus,
      recommendation: result.recommendation,
      model_used: "basic-rule-model",
    },
  });

  return result;
};

export const scheduleRecommendationService =
  async (
    teamId: string,
    userId: string
  ) => {

    // get user's tasks
    const tasks = await prisma.tasks.findMany({
      where: {
        team_id: teamId,
        assignee_id: userId,
      },
    });

    // call FastAPI
    const response = await aiClient.post(
      "/schedule-recommendation",
      {
        tasks,
      }
    );

    return response.data;
  };