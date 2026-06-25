import { supabase } from "../../config/supabase";
import prisma from "../../config/prisma";

export const attachmentService = {
  async upload(taskId: string, file: Express.Multer.File) {
    try {
      const fileName = `${Date.now()}-${file.originalname}`;

      const { data, error } = await supabase.storage
        .from("task-files")
        .upload(fileName, file.buffer, {
          contentType: file.mimetype,
        });

      if (error) {
        console.error("SUPABASE_UPLOAD_ERROR:", error);
        throw error;
      }

      const url = supabase.storage
        .from("task-files")
        .getPublicUrl(fileName).data.publicUrl;

      const result = await prisma.task_attachments.create({
        data: {
          task_id: taskId,
          file_name: file.originalname,
          file_url: url,
          file_type: file.mimetype,
          size: file.size,
        },
      });

      return result;

    } catch (err) {
      console.error("UPLOAD_ATTACHMENT_ERROR:", err);
      throw err;
    }
  },

  async findByTask(taskId: string) {
    return prisma.task_attachments.findMany({
      where: { task_id: taskId },
      orderBy: { created_at: "desc" },
    });
  },

  async remove(id: string) {
    const file = await prisma.task_attachments.findUnique({
      where: { id },
    });

    const path = file?.file_url.split("/").pop();

    if (path) {
      await supabase.storage.from("task-files").remove([path]);
    }

    return prisma.task_attachments.delete({ where: { id } });
  },
};