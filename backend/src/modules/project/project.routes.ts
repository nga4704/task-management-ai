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
import { isProjectMember } from "../../middlewares/project.middleware";

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
router.get(
 "/dashboard",
 protect,
 getProjectsDashboard
);

router.get(
 "/activity",
 protect,
 getProjectsActivity
);

router.put(
  "/:projectId",
  protect,
  isProjectMember,
  updateProject
);

router.delete(
  "/:projectId",
  protect,
  isProjectMember,
  deleteProject
);

router.get(
 "/:projectId",
 protect,
 isProjectMember,
 getProjectDetail
);

export default router;