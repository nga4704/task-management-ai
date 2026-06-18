import { Router } from "express";

import {
  createProject,
  getProjects,
  getProjectDetail,
  updateProject,
  deleteProject,
  getProjectsDashboard,
  getProjectsActivity,
} from "./project.controller";

import { protect } from "../../middlewares/auth.middleware";
import { isTeamMember } from "../../middlewares/team.middleware";

const router = Router();

// TEAM SCOPED PROJECTS (IMPORTANT)
router.post(
  "/teams/:teamId/projects",
  protect,
  isTeamMember,
  createProject
);

router.get(
  "/teams/:teamId/projects",
  protect,
  isTeamMember,
  getProjects
);

// GLOBAL (optional)
router.get("/dashboard", getProjectsDashboard);
router.get("/activity", getProjectsActivity);

router.get("/:projectId", getProjectDetail);
router.put("/:projectId", updateProject);
router.delete("/:projectId", deleteProject);

export default router;