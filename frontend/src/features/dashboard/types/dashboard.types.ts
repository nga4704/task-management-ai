// src/features/dashboard/types/dashboard.types.ts


import type {
  LucideIcon,
} from "lucide-react";

export interface StatItem {
  title: string;

  value: string;

  growth: string;

  icon: LucideIcon;
}


export type ActivityItem = {
  id: number;

  text: string;

  time: string;
};