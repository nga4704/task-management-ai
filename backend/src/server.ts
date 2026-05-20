import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createServer } from "http";
import { initSocket } from "./config/socket";

import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import teamRoutes from "./routes/team.routes";
import taskRoutes from "./routes/task.routes";
import dashboardRoutes from "./routes/dashboard.routes";
import notificationRoutes from "./routes/notification.routes";
import aiRoutes from "./routes/ai.routes";
import activityLogRoutes from "./routes/activityLog.routes";
import { errorHandler } from "./middlewares/error.middleware";

dotenv.config();

const app = express();

const httpServer = createServer(app);
// init socket
initSocket(httpServer);


app.use(cors());

app.use(express.json());

app.use("/api/v1/auth", authRoutes);

app.use("/api/v1/users", userRoutes);

app.use("/uploads", express.static("uploads"));

app.use("/api/v1/teams", teamRoutes);

app.use("/api/v1/tasks", taskRoutes);

app.use("/api/v1/dashboard", dashboardRoutes);

app.use("/api/v1/notifications", notificationRoutes);

app.use("/api/v1/ai", aiRoutes);

app.use("/api/v1/activity-logs", activityLogRoutes);

app.get("/", (req, res) => {
  res.send("API running");
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

