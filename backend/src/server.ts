import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import teamRoutes from "./routes/team.routes";
import taskRoutes from "./routes/task.routes";
import dashboardRoutes from "./routes/dashboard.routes";
import notificationRoutes from "./routes/notification.routes";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/v1/auth", authRoutes);

app.use("/api/v1/users", userRoutes);

app.use("/uploads", express.static("uploads"));

app.use("/api/v1/teams", teamRoutes);

app.use("/api/v1/tasks", taskRoutes);

app.use("/api/v1/dashboard", dashboardRoutes);

app.use("/api/v1/notifications", notificationRoutes);

app.get("/", (req, res) => {
  res.send("API running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});