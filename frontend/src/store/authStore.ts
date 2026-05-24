import { create } from "zustand";

interface User {
  id: string;
  email: string;
  username: string;
  full_name?: string;
}

interface AuthState {
  user: User | null;

  accessToken: string | null;
  refreshToken: string | null;

  setUser: (user: User | null) => void;

  setTokens: (
    access: string,
    refresh: string
  ) => void;

  logout: () => void;
}

export const useAuthStore = create<AuthState>(
  (set) => ({
    user: null,

    accessToken: localStorage.getItem("accessToken"),
    refreshToken: localStorage.getItem("refreshToken"),

    setUser: (user) => set({ user }),

    setTokens: (access, refresh) => {
      localStorage.setItem("accessToken", access);
      localStorage.setItem("refreshToken", refresh);

      set({
        accessToken: access,
        refreshToken: refresh,
      });
    },

    logout: () => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");

      set({
        user: null,
        accessToken: null,
        refreshToken: null,
      });
    },
  })
);