/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FFF9F2",
        paper: "#FFFFFF",
        coral: "#FF5A5F",
        coralDark: "#E8444A",
        purple: "#7C3AED",
        purpleDark: "#6224C5",
        gold: "#F4C95D",
        ink: "#17151D",
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