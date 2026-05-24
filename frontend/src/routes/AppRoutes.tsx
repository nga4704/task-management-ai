import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import WorkspacePage from "../pages/workspace/WorkspacePage";
import TasksPage from "../pages/tasks/TasksPage";
import CalendarPage from "../pages/calendar/CalendarPage";
import ProjectsPage from "../pages/projects/ProjectsPage";
import NotificationsPage from "../pages/notifications/NotificationsPage";
import SettingsPage from "../pages/settings/SettingsPage";
import AIPlannerPage from "../pages/ai-planner/AIPlannerPage";
import InsightsPage from "../pages/insights/InsightsPage";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={<LoginPage />} />

      <Route path="/register" element={<RegisterPage />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />

      <Route path="/workspace" element={<WorkspacePage />} />

      <Route path="/tasks" element={<TasksPage />} />

      <Route path="/calendar" element={<CalendarPage />} />

      <Route path="/projects" element={<ProjectsPage />} />

      <Route path="/ai-planner" element={<AIPlannerPage />} />

      <Route path="/insights" element={<InsightsPage />} />

      <Route path="/notifications" element={<NotificationsPage />} />

      <Route path="/settings" element={<SettingsPage />} />
    </Routes>

  );
}

export default AppRoutes;