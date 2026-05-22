import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import WorkspacePage from "../pages/workspace/WorkspacePage";
import TaskBoardPage from "../pages/task-board/TaskBoardPage";
import TaskDetailPage from "../pages/task-detail/TaskDetailPage";
import SchedulePage from "../pages/schedule/SchedulePage";
import ProjectsPage from "../pages/projects/ProjectsPage";
import AnalyticsPage from "../pages/analytics/AnalyticsPage";
import AIInsightsPage from "../pages/ai-insights/AIInsightsPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={<LoginPage />} />

      <Route path="/register" element={<RegisterPage />} />

      <Route path="/dashboard" element={<DashboardPage />} />

      <Route path="/workspace" element={<WorkspacePage />} />

      <Route path="/task-board" element={<TaskBoardPage />} />

      <Route path="/task-detail" element={<TaskDetailPage />} />

      <Route path="/schedule" element={<SchedulePage />} />

      <Route path="/projects" element={<ProjectsPage />} />

      <Route path="/analytics" element={<AnalyticsPage />} />

      <Route path="/ai-insights" element={<AIInsightsPage />} />
    </Routes>

  );
}

export default AppRoutes;