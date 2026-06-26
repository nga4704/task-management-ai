import { Router } from "express";
import { generatePlan } from "./aiPlanner.controller";

const router = Router();

router.post("/generate", generatePlan);

export default router;