export const PROJECT_TABS = [
  "overview",
  "board",
  "calendar",
  "timeline",
  "members",
  "analytics",
] as const;

export type ProjectTab =
  (typeof PROJECT_TABS)[number];