import type {
  TaskColumns,
} from "@/shared/types/task.types";

export const mockTasks: TaskColumns = {
  todo: [
    {
      id: "1",
      title: "Design authentication workflow",
      priority: "High",
      progress: 20,
      dueDate: "Tomorrow",
      aiSuggested: true,
    },

    {
      id: "2",
      title: "Setup PostgreSQL schema",
      priority: "Medium",
      progress: 40,
      dueDate: "May 28",
    },
  ],

  inProgress: [
    {
      id: "3",
      title: "Build AI productivity dashboard",
      priority: "High",
      progress: 72,
      dueDate: "Today",
      aiSuggested: true,
    },
  ],

  review: [
    {
      id: "4",
      title: "Optimize API performance",
      priority: "Low",
      progress: 90,
      dueDate: "May 30",
    },
  ],

  done: [
    {
      id: "5",
      title: "Initialize frontend architecture",
      priority: "Low",
      progress: 100,
      dueDate: "Completed",
    },
  ],
};