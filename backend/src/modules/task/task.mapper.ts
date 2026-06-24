import { TaskStatus } from "@prisma/client";

/**
 * convert frontend -> prisma enum
 */
export const mapTaskStatusToPrisma = (
  status?: string
): TaskStatus | undefined => {
  if (!status) return undefined;

  const validStatuses: TaskStatus[] = [
    "TODO",
    "IN_PROGRESS",
    "REVIEW",
    "DONE",
  ];

  if (validStatuses.includes(status as TaskStatus)) {
    return status as TaskStatus;
  }

  return undefined;
};