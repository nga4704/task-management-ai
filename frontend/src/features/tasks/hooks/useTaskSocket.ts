import { useEffect } from "react";
import socket from "@/lib/socket";
import { queryClient } from "@/lib/queryClient";

export function useTaskSocket(projectId?: string) {
  useEffect(() => {
    if (!projectId) return;

    const taskCreatedHandler = () => {
      queryClient.invalidateQueries({
        queryKey: ["tasks", projectId],
      });
    };

    const taskUpdatedHandler = (updatedTask: any) => {
      // ❌ KHÔNG invalidate all tasks nữa (gây lag + revert UI)

      // ✅ update cache nhẹ nhàng (no refetch)
      queryClient.setQueryData(
        ["task-detail", updatedTask.id],
        updatedTask
      );

      // ✅ update task list cache trực tiếp (IMPORTANT FIX)
      queryClient.setQueriesData(
        { queryKey: ["tasks"] },
        (old: any) => {
          if (!old) return old;

          return old.map((t: any) =>
            t.id === updatedTask.id ? { ...t, ...updatedTask } : t
          );
        }
      );
    };

    const taskDeletedHandler = (deletedTask: any) => {
      queryClient.setQueriesData(
        { queryKey: ["tasks"] },
        (old: any) => {
          if (!old) return old;
          return old.filter((t: any) => t.id !== deletedTask.id);
        }
      );
    };

    socket.on("taskCreated", taskCreatedHandler);
    socket.on("taskUpdated", taskUpdatedHandler);
    socket.on("taskDeleted", taskDeletedHandler);

    return () => {
      socket.off("taskCreated", taskCreatedHandler);
      socket.off("taskUpdated", taskUpdatedHandler);
      socket.off("taskDeleted", taskDeletedHandler);
    };
  }, [projectId]);
}