import { useEffect, useState } from "react";
import api from "@/lib/api";

export type Attachment = {
  id: string;
  file_name: string;
  file_url: string;
};

export function useAttachments(taskId?: string) {
  const [files, setFiles] = useState<Attachment[]>([]);
  const [loading, setLoading] = useState(false);

  // =========================
  // FETCH
  // =========================
  const fetchFiles = async () => {
    if (!taskId) return;

    try {
      const res = await api.get(`/attachments/${taskId}`);
      const data = res.data;

      setFiles(Array.isArray(data) ? data : data?.data ?? []);
    } catch (err) {
      console.error("FETCH_ATTACHMENTS_ERROR:", err);
    }
  };

  // =========================
  // UPLOAD
  // =========================
  const uploadFile = async (file: File) => {
    if (!taskId) return;

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("file", file);

      const res = await api.post(
        `/attachments/${taskId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setFiles((prev) => [res.data, ...prev]);
    } catch (err) {
      console.error("UPLOAD_ERROR:", err);
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // DELETE
  // =========================
  const deleteFile = async (id: string) => {
    try {
      await api.delete(`/attachments/${id}`);
      setFiles((prev) => prev.filter((f) => f.id !== id));
    } catch (err) {
      console.error("DELETE_ERROR:", err);
    }
  };

  // =========================
  // INIT
  // =========================
  useEffect(() => {
    fetchFiles();
  }, [taskId]);

  return {
    files,
    loading,
    uploadFile,
    deleteFile,
    refetch: fetchFiles,
  };
}