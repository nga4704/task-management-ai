import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createServer } from "http";

import { initSocket } from "./config/socket";

import authRoutes from "./modules/auth/auth.routes";
import userRoutes from "./modules/user/user.routes";
import teamRoutes from "./modules/team/team.routes";
import taskRoutes from "./modules/task/task.routes";
import dashboardRoutes from "./modules/dashboard/dashboard.routes";
import notificationRoutes from "./modules/notification/notification.routes";
import aiRoutes from "./modules/ai/ai.routes";
import activityLogRoutes from "./modules/activityLog/activityLog.routes";

import projectRoutes from "./modules/project/project.routes";
import subtaskRoutes from "./modules/subtask/subtask.routes";
import attachmentRoutes from "./modules/attachment/attachment.routes";
import commentRoutes from "./modules/comment/comment.routes";
import { errorHandler } from "./middlewares/error.middleware";
import inviteRoutes from "./modules/team-invites/invite.routes";
import activityRoutes from "./modules/activity/activity.routes";

dotenv.config();

const app = express();

const httpServer =
  createServer(app);

initSocket(httpServer);

app.use(cors());

app.use(express.json());

app.use(
  "/api/v1/auth",
  authRoutes
);

app.use(
  "/api/v1/users",
  userRoutes
);

app.use(
  "/uploads",
  express.static("uploads")
);

app.use(
  "/api/v1/teams",
  teamRoutes
);

app.use(
  "/api/v1/tasks",
  taskRoutes
);

app.use(
  "/api/v1/projects",
  projectRoutes
);

app.use(
  "/api/v1/dashboard",
  dashboardRoutes
);

app.use(
  "/api/v1/notifications",
  notificationRoutes
);

app.use(
  "/api/v1/ai",
  aiRoutes
);

app.use(
  "/api/v1/activity-logs",
  activityLogRoutes
);

app.get("/", (_, res) => {
  res.send("API running");
});

app.use("/api/v1/subtasks", subtaskRoutes);
app.use("/api/v1/attachments", attachmentRoutes);
app.use("/api/v1/comments", commentRoutes);
app.use("/api/v1/team-invites", inviteRoutes);
app.use("/api/v1", activityRoutes);

app.use(errorHandler);

const PORT =
  process.env.PORT || 5000;

httpServer.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});