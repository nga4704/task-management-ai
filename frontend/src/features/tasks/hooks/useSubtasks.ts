import { useEffect, useState } from "react";
import api from "@/lib/api";

export type Subtask = {
  id: string;
  title: string;
  completed: boolean;
};

export function useSubtasks(taskId: string) {
  const [items, setItems] = useState<Subtask[]>([]);
  const [loading, setLoading] = useState(false);

  // FETCH
  const fetchSubtasks = async () => {
    try {
      const res = await api.get(`/subtasks/${taskId}`);
      setItems(res.data || []);
    } catch (err) {
      console.error("FETCH_SUBTASKS_ERROR:", err);
    }
  };

  useEffect(() => {
    if (taskId) fetchSubtasks();
  }, [taskId]);

  // TOGGLE
  const toggle = async (id: string) => {
    try {
      setItems((prev) =>
        prev.map((st) =>
          st.id === id
            ? { ...st, completed: !st.completed }
            : st
        )
      );

      await api.patch(`/subtasks/${id}/toggle`);
    } catch (err) {
      console.error("TOGGLE_SUBTASK_ERROR:", err);
    }
  };

  // ADD
  const addSubtask = async (title: string) => {
    try {
      setLoading(true);

      const res = await api.post(`/subtasks/${taskId}`, {
        title,
      });

      setItems((prev) => [...prev, res.data]);
    } catch (err) {
      console.error("ADD_SUBTASK_ERROR:", err);
    } finally {
      setLoading(false);
    }
  };

  // DELETE
  const removeSubtask = async (id: string) => {
    try {
      await api.delete(`/subtasks/${id}`);
      setItems((prev) => prev.filter((i) => i.id !== id));
    } catch (err) {
      console.error("DELETE_SUBTASK_ERROR:", err);
    }
  };

  return {
    items,
    loading,
    toggle,
    addSubtask,
    removeSubtask,
  };
}