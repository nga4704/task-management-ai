import { Router } from "express";

import {
  createProject,
  getProjects,
  getProjectDetail,
  updateProject,
  deleteProject,
  getProjectsDashboard,
  getProjectsActivity
} from "./project.controller";

const router = Router();

router.post("/", createProject);

router.get("/", getProjects);

router.get(
  "/dashboard",
  getProjectsDashboard
);

router.get(
  "/activity",
  getProjectsActivity
);

router.get(
  "/:projectId",
  getProjectDetail
);

router.put(
  "/:projectId",
  updateProject
);

router.delete(
  "/:projectId",
  deleteProject
);

export default router;