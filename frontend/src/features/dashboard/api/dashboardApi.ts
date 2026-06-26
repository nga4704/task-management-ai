import api from "@/lib/api";

export const getOverview = (
  teamId: string
) => {
  return api.get(
    `/dashboard/overview?teamId=${teamId}`
  );
};