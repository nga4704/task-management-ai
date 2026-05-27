// src/shared/constants/task.ts

import type {
  TaskPriority,
  TaskStatus,
} from "../types/task.types";

export const statusLabel: Record<
  TaskStatus,
  string
> = {
  todo: "Todo",

  inProgress: "In Progress",

  review: "Review",

  done: "Completed",
};

export const statusStyles: Record<
  TaskStatus,
  string
> = {
  todo: `
    bg-surfaceSecondary
    text-muted
  `,

  inProgress: `
    bg-infoLight
    text-info
  `,

  review: `
    bg-warningLight
    text-warning
  `,

  done: `
    bg-successLight
    text-success
  `,
};

export const priorityStyles: Record<
  TaskPriority,
  string
> = {
  High: `
    bg-dangerLight
    text-danger
  `,

  Medium: `
    bg-warningLight
    text-warning
  `,

  Low: `
    bg-successLight
    text-success
  `,
};