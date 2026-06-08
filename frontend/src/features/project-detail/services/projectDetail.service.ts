import {
  mockProjectDetail,
} from "../data/mockProjectDetail";

export async function getProjectDetail(
  projectId: string
) {

  return Promise.resolve({
    ...mockProjectDetail,
    id: projectId,
  });

}