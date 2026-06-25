import { Routes, Route, Navigate } from "react-router-dom";

import { LoginPage, RegisterPage, ForgotPasswordPage, ResetPasswordPage, AuthCallback } from "@/features/auth";
import DashboardPage from "@/features/dashboard/pages/DashboardPage";
import ProjectsPage from "@/features/projects/pages/ProjectsPage";
import TasksPage from "@/features/tasks/pages/TasksPage";
import CalendarPage from "@/features/calendar/pages/CalendarPage";
import NotificationsPage from "@/features/notifications/pages/NotificationsPage";
import SettingsPage from "@/features/settings/pages/SettingsPage";
import AIInsightsPage from "@/features/insights/pages/AIInsightsPage";
import PlannerPage from "@/features/planner/pages/PlannerPage";
import AnalyticsPage from "@/features/analytics/pages/AnalyticsPage";
import ProjectDetailPage from "@/features/project-detail/pages/ProjectDetailPage";
import ProtectedRoute from "./ProtectedRoute";
import TeamsPage from "@/features/teams/pages/TeamsPage";
import AcceptInvitePage from "@/features/projects/pages/AcceptInvitePage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />

      {/* AUTH */}
      <Route path="/login" element={<LoginPage />} />

      <Route path="/register" element={<RegisterPage />} />

      <Route
        path="/forgot-password"
        element={
          <ForgotPasswordPage />
        }
      />

      <Route
        path="/reset-password"
        element={
          <ResetPasswordPage />
        }
      />
      <Route
        path="/auth/callback"
        element={<AuthCallback />}
      />
      {/* DASHBOARD */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />

      {/* TEAMS */}
      <Route
        path="/teams"
        element={
          <ProtectedRoute>
            <TeamsPage />
          </ProtectedRoute>
        }
      />
      {/* <Route
        path="/teams/:teamId"
        element={
          <ProtectedRoute>
            <TeamDetailPage />
          </ProtectedRoute>
        }
      /> */}
      {/* PROJECTS */}
      {/* <Route path="/projects" element={<ProjectsPage />} />

      <Route
        path="/projects/:projectId"
        element={<ProjectDetailPage />}
      /> */}

      <Route
        path="/teams/:teamId/projects"
        element={
          <ProtectedRoute>
            <ProjectsPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/teams/:teamId/projects/:projectId"
        element={
          <ProtectedRoute>
            <ProjectDetailPage />
          </ProtectedRoute>
        }
      />

      {/* TASKS */}
      <Route
        path="/tasks"
        element={
          <ProtectedRoute>
            <TasksPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/calendar"
        element={
          <ProtectedRoute>
            <CalendarPage />
          </ProtectedRoute>
        }
      />
      <Route path="/invite" element={<AcceptInvitePage />} />
      
      {/* AI */}
      <Route path="/planner" element={<PlannerPage />} />

      <Route path="/insights" element={<AIInsightsPage />} />

      <Route path="/analytics" element={<AnalyticsPage />} />
      {/* SYSTEM */}
      <Route path="/notifications" element={<NotificationsPage />} />

      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <SettingsPage />
          </ProtectedRoute>
        }
      />
    </Routes>

  );
}

export default AppRoutes;