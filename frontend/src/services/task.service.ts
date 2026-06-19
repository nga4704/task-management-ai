import api from "@/lib/api";

import type {
  CreateTaskPayload,
} from "../features/tasks/types/task.types";

export const createTask = (
  payload: CreateTaskPayload
) => {
  return api.post(
    "/tasks",
    payload
  );
};