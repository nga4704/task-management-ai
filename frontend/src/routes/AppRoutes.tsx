import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import WorkspacePage from "../pages/workspace/WorkspacePage";
import TaskBoardPage from "../pages/task-board/TaskBoardPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={<LoginPage />} />

      <Route path="/register" element={<RegisterPage />} />

      <Route
        path="/dashboard"
        element={<DashboardPage />}
      />

      <Route
        path="/workspace"
        element={<WorkspacePage />}
      />

      <Route
        path="/task-board"
        element={<TaskBoardPage />}
      />

    </Routes>

  );
}

export default AppRoutes;