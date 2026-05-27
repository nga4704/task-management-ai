import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "../../features/auth/pages/LoginPage";
import RegisterPage from "../../features/auth/pages/RegisterPage";
import DashboardPage from "../../features/dashboard/pages/DashboardPage";
import WorkspacePage from "../../features/workspace/pages/WorkspacePage";
import TasksPage from "../../features/tasks/pages/TasksPage";
import CalendarPage from "../../features/calendar/pages/CalendarPage";
import NotificationsPage from "../../features/notifications/pages/NotificationsPage";
import SettingsPage from "../../features/settings/pages/SettingsPage";
import AIPlannerPage from "../../features/ai-planner/pages/AIPlannerPage";
import AnalyticsPage from "../../features/analytics/pages/AnalyticsPage";
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
          // <ProtectedRoute>
            <DashboardPage />
          // </ProtectedRoute>
        }
      />

      <Route path="/workspace" element={<WorkspacePage />} />

      <Route path="/tasks" element={<TasksPage />} />

      <Route path="/calendar" element={<CalendarPage />} />

      <Route path="/ai-planner" element={<AIPlannerPage />} />

      <Route path="/analytics" element={<AnalyticsPage />} />

      <Route path="/notifications" element={<NotificationsPage />} />

      <Route path="/settings" element={<SettingsPage />} />
    </Routes>

  );
}

export default AppRoutes;