import type {
  ProductivityData,
  TeamPerformance,
} from "../types/analytics.types";

export const productivityData: ProductivityData[] =
  [
    {
      name: "Mon",
      productivity: 62,
    },

    {
      name: "Tue",
      productivity: 74,
    },

    {
      name: "Wed",
      productivity: 82,
    },

    {
      name: "Thu",
      productivity: 68,
    },

    {
      name: "Fri",
      productivity: 91,
    },

    {
      name: "Sat",
      productivity: 56,
    },

    {
      name: "Sun",
      productivity: 40,
    },
  ];

export const teamPerformance: TeamPerformance[] =
  [
    {
      id: "1",

      team: "Frontend Team",

      productivity: 91,

      completedTasks: 42,

      aiScore: 95,
    },

    {
      id: "2",

      team: "Backend Team",

      productivity: 86,

      completedTasks: 38,

      aiScore: 90,
    },

    {
      id: "3",

      team: "AI Team",

      productivity: 94,

      completedTasks: 27,

      aiScore: 98,
    },
  ];