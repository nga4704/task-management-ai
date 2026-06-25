import express from "express";
import { subtaskController } from "./subtask.controller";

const router = express.Router();

router.get("/:taskId", subtaskController.getByTask);

router.post("/:taskId", subtaskController.create);

router.patch("/:id/toggle", subtaskController.toggle);

router.delete("/:id", subtaskController.remove);

export default router;