import { create } from "zustand";

type Theme = "light" | "dark";

type ThemeStore = {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
};

const savedTheme =
  (localStorage.getItem("theme") as Theme) || "light";

// sync DOM ngay khi load store
if (typeof window !== "undefined") {
  document.documentElement.classList.toggle(
    "dark",
    savedTheme === "dark"
  );
}

export const useThemeStore = create<ThemeStore>((set, get) => ({
  theme: savedTheme,

  setTheme: (t) => {
    localStorage.setItem("theme", t);

    document.documentElement.classList.toggle(
      "dark",
      t === "dark"
    );

    set({ theme: t });
  },

  toggleTheme: () => {
    const next = get().theme === "light" ? "dark" : "light";

    localStorage.setItem("theme", next);

    document.documentElement.classList.toggle(
      "dark",
      next === "dark"
    );

    set({ theme: next });
  },
}));