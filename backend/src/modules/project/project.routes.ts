import { Router } from "express";

import {
  createProject,
  getProjects,
  getProjectDetail,
  updateProject,
  deleteProject,
} from "./project.controller";

const router = Router();

router.post("/", createProject);

router.get("/", getProjects);

router.get("/:projectId", getProjectDetail);

router.put("/:projectId", updateProject);

router.delete("/:projectId", deleteProject);

export default router;