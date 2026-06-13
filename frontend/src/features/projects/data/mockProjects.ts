import type {
  Project,
} from "../types/project.types";
import type {
  WorkspaceActivity,
} from "../types/workspace.types";

export const mockProjects: Project[] = [
  {
    id: "1",

    name: "AI Productivity Platform",

    description:
      "AI-powered workflow management system for team productivity.",

    progress: 78,

    tasks: 24,

    members: 8,

    status: "In Progress",

    aiScore: 92,

    startDate: "2026-05-01",

    endDate: "2026-07-15",

    createdAt: "2026-04-20",
  },

  {
    id: "2",

    name: "Analytics Dashboard",

    description:
      "Advanced analytics and reporting module.",

    progress: 56,

    tasks: 12,

    members: 5,

    status: "Review",

    aiScore: 84,

    startDate: "2026-05-10",

    endDate: "2026-08-01",

    createdAt: "2026-04-25",
  },

  {
    id: "3",

    name: "Authentication Service",

    description:
      "JWT authentication and RBAC system.",

    progress: 100,

    tasks: 18,

    members: 4,

    status: "Completed",

    aiScore: 97,

    startDate: "2026-03-01",

    endDate: "2026-05-30",

    createdAt: "2026-02-15",
  },
];

export const mockActivities: WorkspaceActivity[] =
  [
    {
      id: "1",

      user: "Nga",

      action:
        "updated AI sprint planning dashboard",

      time: "2 mins ago",
    },

    {
      id: "2",

      user: "AI Assistant",

      action:
        "optimized workload distribution",

      time: "15 mins ago",
    },

    {
      id: "3",

      user: "Backend Team",

      action:
        "completed API integration tasks",

      time: "1 hour ago",
    },
  ];