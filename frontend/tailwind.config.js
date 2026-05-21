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
        secondary: "#7C4DFF",
        dark: "#111111",
        soft: "#F5F5F5",
      },
      borderRadius: {
        xl2: "28px",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [],
}