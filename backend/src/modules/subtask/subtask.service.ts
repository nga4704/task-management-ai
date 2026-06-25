import prisma from "../../config/prisma";
import { AppError } from "../../middlewares/error.middleware";

export const subtaskService = {
  async create(taskId: string, title: string) {
    const subtask = await prisma.subtasks.create({
      data: {
        task_id: taskId,
        title,
        completed: false,
      },
    });

    return {
      id: subtask.id,
      title: subtask.title,
      completed: subtask.completed,
    };
  },

  async toggle(id: string) {
    const subtask = await prisma.subtasks.findUnique({
      where: { id },
    });

    if (!subtask) {
      throw new AppError("Subtask not found", 404);
    }

    const updated = await prisma.subtasks.update({
      where: { id },
      data: {
        completed: !subtask.completed,
      },
    });

    return {
      id: updated.id,
      title: updated.title,
      completed: updated.completed,
    };
  },

  async remove(id: string) {
    const subtask = await prisma.subtasks.findUnique({
      where: { id },
    });

    if (!subtask) {
      throw new AppError("Subtask not found", 404);
    }

    await prisma.subtasks.delete({
      where: { id },
    });

    return { id };
  },

  async findByTask(taskId: string) {
    const subtasks = await prisma.subtasks.findMany({
      where: { task_id: taskId },
      orderBy: { created_at: "asc" },
    });

    return subtasks.map((st) => ({
      id: st.id,
      title: st.title,
      completed: st.completed,
    }));
  },
};