import express from "express";
import multer from "multer";
import { attachmentController } from "./attachment.controller";

const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router();

router.get("/:taskId", attachmentController.getByTask);

router.post(
  "/:taskId",
  upload.single("file"),
  attachmentController.upload
);

router.delete("/:id", attachmentController.remove);

export default router;