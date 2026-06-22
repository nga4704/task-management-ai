import { TaskStatus } from "@prisma/client";

/**
 * convert frontend -> prisma enum
 */
export const mapTaskStatusToPrisma = (
  status?: string
): TaskStatus | undefined => {
  if (!status) return undefined;

  switch (status) {
    case "todo":
      return "TODO";

    case "in-progress":
      return "IN_PROGRESS";

    case "review":
      return "REVIEW";

    case "done":
      return "DONE";

    default:
      return undefined;
  }
};