import api from "@/lib/api";

export const userApi = {
  getMe: async () => {
    const res = await api.get("/users/me");
    return res.data;
  },

  updateProfile: async (data: {
    fullName: string;
    username: string;
  }) => {
    const res = await api.put("/users/profile", data);
    return res.data;
  },
};