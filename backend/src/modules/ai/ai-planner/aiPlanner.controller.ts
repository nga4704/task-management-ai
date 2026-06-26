import { Request, Response } from "express";
import { AIPlannerService } from "./aiPlanner.service";

export const generatePlan = async (req: Request, res: Response) => {
  try {
    const service = new AIPlannerService();

    const result = await service.generatePlan(req.body);

    return res.json(result);
  } catch (error) {
    console.error("❌ AI PLANNER ERROR:", error);

    return res.status(500).json({
      message: "AI Planner failed",
    });
  }
};