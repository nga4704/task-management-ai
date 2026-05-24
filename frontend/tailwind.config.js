/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  //   extend: {
  //     colors: {
  //       primary: "#C8E95E",
  //       secondary: "#7C4DFF",
  //       dark: "#111111",
  //       soft: "#F5F5F5",
  //     },
  //     borderRadius: {
  //       xl2: "28px",
  //     },
  //     boxShadow: {
  //       soft: "0 10px 30px rgba(0,0,0,0.05)",
  //     },
  //   },
  // },
  extend: {

      colors: {

        primary: "#C8E95E",

        secondary: "#8B5CF6",

        background: "#F5F7FB",

        surface: "#FFFFFF",

        "surface-secondary": "#F7F8FA",

        text: "#111827",

        muted: "#6B7280",

        border: "#E5E7EB",

        success: "#22C55E",

        warning: "#F59E0B",

        danger: "#EF4444",
      },

      boxShadow: {

        soft:
          "0 4px 20px rgba(0,0,0,0.06)",

        card:
          "0 8px 30px rgba(0,0,0,0.08)",

        floating:
          "0 12px 40px rgba(0,0,0,0.12)",
      },

      borderRadius: {

        card: "24px",

        modal: "32px",

        button: "9999px",
      },

      spacing: {

        section: "24px",

        container: "32px",
      },

      fontFamily: {

        sans: [
          "Inter",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
}