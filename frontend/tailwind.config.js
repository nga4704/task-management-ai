/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#C8E95E",
        primaryHover: "#B9DD47",

        secondary: "#8B5CF6",

        background: "#F5F7FB",

        surface: "#FFFFFF",
        surfaceSecondary: "#F7F8FA",
        surfaceTertiary: "#EEF2F7",

        text: "#111827",
        muted: "#6B7280",

        border: "#E5E7EB",

        success: "#22C55E",
        successLight: "#DCFCE7",

        warning: "#F59E0B",
        warningLight: "#FEF3C7",

        danger: "#EF4444",
        dangerLight: "#FEE2E2",

        info: "#3B82F6",
        infoLight: "#DBEAFE",

        primaryLight: "#DFF5A5",
        secondaryLight: "#E9DDFF",
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