import { create } from "zustand";
import type { User as SupabaseUser } from "@supabase/supabase-js";

interface User {
  id: string;
  email: string;
  username?: string;
  full_name?: string;
  avatar?: string;
}

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
  setSupabaseUser: (user: SupabaseUser | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,

  setUser: (user) => set({ user }),

  setSupabaseUser: (user) =>
    set({
      user: user
        ? {
            id: user.id,
            email: user.email || "",
            full_name: user.user_metadata?.full_name,
            username: user.user_metadata?.username,
            avatar: user.user_metadata?.avatar,
          }
        : null,
    }),

  logout: () => set({ user: null }),
}));