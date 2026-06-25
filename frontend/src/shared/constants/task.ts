// src/shared/constants/task.ts

import type {
  TaskPriority,
  TaskStatus,
} from "@/features/tasks/types/task.types";

export const statusLabel: Record<
  TaskStatus,
  string
> = {
  TODO: "Todo",

  IN_PROGRESS: "In Progress",

  REVIEW: "Review",

  DONE: "Completed",
};

export const statusStyles: Record<
  TaskStatus,
  string
> = {
  TODO: `
    bg-surfaceSecondary
    text-muted
  `,

  IN_PROGRESS: `
    bg-infoLight
    text-info
  `,

  REVIEW: `
    bg-warningLight
    text-warning
  `,

  DONE: `
    bg-successLight
    text-success
  `,
};

export const priorityStyles: Record<
  TaskPriority,
  string
> = {
  high: `
    bg-dangerLight
    text-danger
  `,

  medium: `
    bg-warningLight
    text-warning
  `,

  low: `
    bg-successLight
    text-success
  `,
};