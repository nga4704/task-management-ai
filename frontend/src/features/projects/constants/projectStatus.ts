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
     bg-secondaryLight
     text-secondary
    `,
  },

  ON_HOLD: {
    label: "On Hold",

    className:
      `bg-warningLight text-warning`,
  },

  COMPLETED: {
    label: "Completed",

    className: `
      bg-successLight
      text-success
    `,
  },
};