import type {
  Task,
} from "@/shared/types/task.types";

export const taskData: Task[] = [
  {
    id: "1",

    title: "Build AI Prediction API",

    priority: "High",

    status: "inProgress",

    progress: 72,

    dueDate: "May 25",
  },

  {
    id: "2",

    title: "Optimize PostgreSQL Queries",

    priority: "Medium",

    status: "review",

    progress: 58,

    dueDate: "May 27",
  },

  {
    id: "3",

    title: "Design Analytics Dashboard",

    priority: "Low",

    status: "done",

    progress: 100,

    dueDate: "May 29",
  },
];

