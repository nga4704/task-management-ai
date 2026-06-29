import prisma from "../../config/prisma";
import { AppError } from "../../middlewares/error.middleware";
import { createNotification } from "../../modules/notification/notification.service";

export const commentService = {
  async findByTask(taskId: string) {
    const comments = await prisma.task_comments.findMany({
      where: {
        task_id: taskId,
      },
      include: {
        users: true,
      },
      orderBy: {
        created_at: "asc",
      },
    });

    // build tree
    const map = new Map();

    comments.forEach((c) => {
      map.set(c.id, { ...c, replies: [] });
    });

    const tree: any[] = [];

    comments.forEach((c) => {
      if (c.parent_id) {
        map.get(c.parent_id)?.replies.push(map.get(c.id));
      } else {
        tree.push(map.get(c.id));
      }
    });

    return tree;
  },

  async create(
    taskId: string,
    userId: string,
    content: string,
    parentId?: string
  ) {
    if (!content.trim()) {
      throw new AppError("Content is required", 400);
    }

    // 1. Lấy task để biết owner
    const task = await prisma.tasks.findUnique({
      where: { id: taskId },
      select: {
        id: true,
        created_by: true,
      },
    });

    if (!task) {
      throw new AppError("Task not found", 404);
    }

    const comment = await prisma.task_comments.create({
      data: {
        task_id: taskId,
        user_id: userId,
        content,
        parent_id: parentId ?? null,
      },
      include: {
        users: {
          select: {
            id: true,
            full_name: true,
            avatar: true,
          },
        },
      },
    });

    // ❗ không notify chính mình
    if (task.created_by !== userId) {
      await createNotification({
        receiverId: task.created_by,
        senderId: userId,
        type: "COMMENT_ADDED",
        title: "New comment on your task",
        message: content,
      });
    }

    return comment;
  },

  async remove(commentId: string, userId: string) {
    const comment = await prisma.task_comments.findUnique({
      where: { id: commentId },
    });

    if (!comment) {
      throw new AppError("Comment not found", 404);
    }

    // optional: chỉ owner mới xoá
    if (comment.user_id !== userId) {
      throw new AppError("Not allowed", 403);
    }

    await prisma.task_comments.delete({
      where: { id: commentId },
    });

    return { id: commentId };
  },
};