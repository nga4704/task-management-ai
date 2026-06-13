import type {
  ProjectStatus,
} from "../types/project.types";

export const projectStatusConfig:
Record<
  ProjectStatus,
  {
    label: string;

    className: string;
  }
> = {
  PLANNING: {
    label: "Planning",

    className: `
      bg-infoLight
      text-info
    `,
  },

  IN_PROGRESS: {
    label: "In Progress",

    className: `
      bg-warningLight
      text-warning
    `,
  },

  REVIEW: {
    label: "Review",

    className: `
      bg-secondaryLight
      text-secondary
    `,
  },

  COMPLETED: {
    label: "Completed",

    className: `
      bg-successLight
      text-success
    `,
  },
};