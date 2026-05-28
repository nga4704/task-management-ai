import {
  CheckCircle2,
  FolderKanban,
  Sparkles,
  Users,
} from "lucide-react";

import type {
  StatCardItem,
} from "@/shared/types/stat.types";

export const workspaceStats: StatCardItem[] = [
  {
    title: "Active Projects",

    value: "12",

    change: "+18%",

    description: "Running projects",

    icon: FolderKanban,
  },

  {
    title: "Team Members",

    value: "34",

    change: "+9%",

    description: "Across workspace",

    icon: Users,
  },

  {
    title: "AI Productivity",

    value: "91%",

    change: "+14%",

    description: "AI optimized",

    highlighted: true,

    icon: Sparkles,
  },

  {
    title: "Completed Sprints",

    value: "18",

    change: "+22%",

    description: "This quarter",

    icon: CheckCircle2,
  },
];