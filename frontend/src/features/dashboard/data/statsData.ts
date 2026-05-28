import {
  AlertTriangle,
  Brain,
  CheckCircle2,
  Clock3,
} from "lucide-react";

import type {
  StatCardItem,
} from "@/shared/types/stat.types";

export const statsData: StatCardItem[] = [
  {
    title: "Total Tasks",

    value: "128",

    change: "+12%",

    description: "vs last month",

    icon: CheckCircle2,
  },

  {
    title: "Completed Tasks",

    value: "94",

    change: "+18%",

    description: "Successfully finished",

    icon: Clock3,
  },

  {
    title: "Overdue Tasks",

    value: "12",

    change: "-3%",

    trend: "negative",

    description: "Needs attention",

    icon: AlertTriangle,
  },

  {
    title: "AI Productivity",

    value: "92%",

    change: "+5%",

    description: "AI optimized",

    // highlighted: true,

    icon: Brain,
  },
];