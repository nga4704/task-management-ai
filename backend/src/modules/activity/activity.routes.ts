import { Router } from "express";
import { getProjectActivities } from "./activity.controller";

const router = Router();

router.get("/projects/:projectId/activities", getProjectActivities);

export default router;