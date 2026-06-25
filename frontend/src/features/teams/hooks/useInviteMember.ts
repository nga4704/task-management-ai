import { useMutation } from "@tanstack/react-query";
import api from "@/lib/api";
import { toast } from "react-hot-toast";

export const useInviteMember = (teamId: string) => {
  return useMutation({
    mutationFn: async (email: string) => {
      const res = await api.post(`/team-invites/${teamId}/invite`, {
        email,
      });
      return res.data;
    },

    onSuccess: () => {
      toast.success("Invitation sent successfully!");
    },

    onError: (err: any) => {
      const message =
        err?.response?.data?.message || "Failed to send invite";

      const status = err?.response?.status;

      if (status === 403) {
        toast.error("You are not allowed to invite members");
        return;
      }

      if (status === 404) {
        toast.error("Team not found");
        return;
      }

      toast.error(message);
    },
  });
};