import type { Task } from "../types/task.types";

export const mockTasks: Task[] = [
  {
    id: "1",
    title: "Setup Project Architecture",
    description:
      "Create frontend architecture, routing and shared components.",
    status: "todo",
    priority: "high",
    progress: 0,
    deadline: "2026-06-01",
    assignee: "Nga",
    riskLevel: 25,
  },

  {
    id: "2",
    title: "Design Authentication UI",
    description:
      "Build login, register and forgot password pages.",
    status: "todo",
    priority: "medium",
    progress: 10,
    deadline: "2026-06-03",
    assignee: "Linh",
    riskLevel: 15,
  },

  {
    id: "3",
    title: "Implement Dashboard",
    description:
      "Develop dashboard widgets and statistics section.",
    status: "in-progress",
    priority: "high",
    progress: 65,
    deadline: "2026-06-05",
    assignee: "Nga",
    riskLevel: 42,
  },

  {
    id: "4",
    title: "Build Workspace Module",
    description:
      "Implement workspace overview and project listing.",
    status: "in-progress",
    priority: "medium",
    progress: 45,
    deadline: "2026-06-07",
    assignee: "Minh",
    riskLevel: 30,
  },

  {
    id: "5",
    title: "Calendar Integration",
    description:
      "Connect task deadlines with calendar view.",
    status: "review",
    priority: "medium",
    progress: 90,
    deadline: "2026-06-09",
    assignee: "Khanh",
    riskLevel: 12,
  },

  {
    id: "6",
    title: "Notification System",
    description:
      "Implement in-app notifications and reminders.",
    status: "review",
    priority: "high",
    progress: 95,
    deadline: "2026-06-08",
    assignee: "Nga",
    riskLevel: 18,
  },

  {
    id: "7",
    title: "Analytics Dashboard",
    description:
      "Create charts for productivity and workload.",
    status: "done",
    priority: "high",
    progress: 100,
    deadline: "2026-05-28",
    assignee: "Huy",
    riskLevel: 0,
  },

  {
    id: "8",
    title: "AI Recommendation Engine",
    description:
      "Generate AI suggestions based on project data.",
    status: "done",
    priority: "high",
    progress: 100,
    deadline: "2026-05-30",
    assignee: "Nga",
    riskLevel: 0,
  },
];