import type { LucideIcon } from "lucide-react";

export type StatTrend =
  | "positive"
  | "negative"
  | "neutral";

export type StatCardItem = {
  title: string;

  value: string;

  change?: string;

  description?: string;

  icon?: LucideIcon;

  highlighted?: boolean;

  trend?: StatTrend;
};