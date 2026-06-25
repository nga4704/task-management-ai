import { useEffect, useState } from "react";
import api from "@/lib/api";
import { supabase } from "@/lib/supabase";

export type Comment = {
  id: string;
  content: string;
  created_at: string;
  parent_id?: string | null;
  users?: {
    full_name: string;
    avatar?: string;
  };
  replies?: Comment[];
};

export function useTaskComments(taskId?: string) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchComments = async () => {
    if (!taskId) return;

    try {
      const res = await api.get(`/comments/${taskId}`);
      setComments(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [taskId]);

  const addComment = async (content: string, parentId?: string) => {
    if (!taskId) return;

    try {
      setLoading(true);

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      await api.post(`/comments/${taskId}`, {
        content,
        userId: user.id,
        parentId,
      });

      await fetchComments();

    } catch (err) {
      console.error("ADD_COMMENT_ERROR:", err);
    } finally {
      setLoading(false);
    }
  };

  return {
    comments,
    loading,
    addComment,
    refetch: fetchComments,
  };
}