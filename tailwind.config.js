/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FAF7F2",
        paper: "#FFFFFF",
        coral: "#B86F55",
        coralDark: "#96543F",
        muted: "#6B625D",
        line: "#E7DDD5",
        ink: "#1C1917",
        warm: "#F1EBE4",
        brandSoft: "#D9A58F",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 70px rgba(71,45,36,.10)",
      },
    },
  },
  plugins: [],
};