import api from "@/config/api";

import type {
  CreateTaskPayload,
} from "../features/tasks/types/createTask.types";

export const createTask = (
  payload: CreateTaskPayload
) => {
  return api.post(
    "/tasks",
    payload
  );
};