/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#C8E95E",
        primaryHover: "#B9DD47",

        // LIGHT
        background: "#F5F7FB",
        surface: "#FFFFFF",
        surfaceSecondary: "#F7F8FA",
        surfaceTertiary: "#EEF2F7",

        text: "#111827",
        muted: "#6B7280",
        border: "#E5E7EB",

        // DARK (PHẢI CÓ)
        backgroundDark: "#0B1220",
        surfaceDark: "#111827",
        surfaceSecondaryDark: "#1F2937",

        textDark: "#F9FAFB",
        mutedDark: "#9CA3AF",
        borderDark: "#374151",
      },

      borderRadius: {
        xs: "12px",
        sm: "16px",
        md: "20px",
        lg: "24px",
        xl: "32px",
      },

      boxShadow: {
        soft: "0 4px 20px rgba(15,23,42,0.06)",
        medium: "0 8px 30px rgba(15,23,42,0.08)",
        large: "0 20px 50px rgba(15,23,42,0.12)",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },

  plugins: [],
};