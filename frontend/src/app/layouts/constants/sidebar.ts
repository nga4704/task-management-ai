import {
  LayoutDashboard,
  KanbanSquare,
  CalendarDays, Brain,
  BarChart3,
  Bell,
  Settings,
  FolderKanban,
  Sparkles,
} from "lucide-react";

export const sidebarSections = [
  {
    title: "Workspace",

    items: [
      {
        title: "Dashboard",
        icon: LayoutDashboard,
        path: "/dashboard",
      },
      {
        title: "Projects",
        icon: FolderKanban,
        path: "/projects",
      },
      {
        title: "My Tasks",
        icon: KanbanSquare,
        path: "/tasks",
      },
      // {
      //   title: "Calendar",
      //   icon: CalendarDays,
      //   path: "/calendar",
      // },
    ],
  },

  {
    title: "AI System",

    items: [
      {
        title: "AI Planner",
        icon: Brain,
        path: "/planner",
      },
      {
        title: "AI Insights",
        icon: Sparkles,
        path: "/insights",
      },

      // {
      //   title: "Analytics",
      //   icon: BarChart3,
      //   path: "/analytics",
      // },
    ],
  },

  {
    title: "System",

    items: [
      {
        title: "Notifications",
        icon: Bell,
        path: "/notifications",
      },

      {
        title: "Settings",
        icon: Settings,
        path: "/settings",
      },
    ],
  },
];