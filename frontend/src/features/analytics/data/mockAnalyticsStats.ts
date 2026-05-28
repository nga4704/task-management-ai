// features/analytics/data/mockAnalyticsStats.ts

import {
  Brain,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

export const analyticsStats = [
  {
    title: "AI Productivity",
    value: "92%",
    change: "+18%",
    description: "Optimization score",
    icon: Brain,
    highlighted: true,
  },

  {
    title: "Completed Tasks",
    value: "148",
    change: "+24%",
    description: "Tasks this sprint",
    icon: CheckCircle2,
  },

  {
    title: "Performance Growth",
    value: "+18%",
    change: "+6%",
    description: "Compared to last sprint",
    icon: TrendingUp,
  },

  {
    title: "Risk Prediction",
    value: "4",
    change: "-2%",
    description: "High-risk tasks",
    icon: AlertTriangle,
  },
];