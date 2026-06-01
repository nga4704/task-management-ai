import {
  mockProjectDetail,
} from "../data/mockProjectDetail";

export async function getProjectDetail() {
  return Promise.resolve(
    mockProjectDetail
  );
}