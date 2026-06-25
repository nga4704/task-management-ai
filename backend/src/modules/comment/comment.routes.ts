import express from "express";
import { commentController } from "./comment.controller";

const router = express.Router();

// GET comments by task
router.get("/:taskId", commentController.getByTask);

// CREATE comment
router.post("/:taskId", commentController.create);

// DELETE comment
router.delete("/:id", commentController.remove);

export default router;