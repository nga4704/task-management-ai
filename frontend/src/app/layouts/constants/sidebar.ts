import {
  LayoutDashboard,
  KanbanSquare,
  CalendarDays,
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
        title: "Workspace",
        icon: FolderKanban,
        path: "/workspace",
      },
      {
        title: "My Tasks",
        icon: KanbanSquare,
        path: "/tasks",
      },
      {
        title: "Calendar",
        icon: CalendarDays,
        path: "/calendar",
      },
    ],
  },

  {
    title: "AI System",

    items: [
      {
        title: "AI Insights",
        icon: Sparkles,
        path: "/ai-insights",
      },

      {
        title: "Analytics",
        icon: BarChart3,
        path: "/analytics",
      },
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