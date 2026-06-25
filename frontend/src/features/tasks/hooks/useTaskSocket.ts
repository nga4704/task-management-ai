import { useEffect } from "react";
import socket from "@/lib/socket";
import { queryClient } from "@/lib/queryClient";

export function useTaskSocket(projectId?: string) {
  useEffect(() => {

    if (!projectId) return;

    socket.on("taskCreated", () => {
      queryClient.invalidateQueries({
        queryKey: ["tasks", projectId],
      });
    });

    socket.on("taskUpdated", (updatedTask) => {
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
      queryClient.setQueryData(
        ["task-detail", updatedTask.id],
        updatedTask
      );
    });

    socket.on("taskDeleted", () => {
      queryClient.invalidateQueries({
        queryKey: ["tasks", projectId],
      });
    });

    return () => {
      socket.off("taskCreated");
      socket.off("taskUpdated");
      socket.off("taskDeleted");
    };
  }, [projectId]);
}