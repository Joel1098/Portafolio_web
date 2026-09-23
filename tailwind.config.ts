/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme:{
    container: {
      center: true,
      padding: "15px",
    },
      screens: {
        sm:"640",
        md:"768",
        lg:"960",
        xl:"1280",
      },
      fontFamily: {
        primary: "var(--font-jetbrains-Mono)",
    },
    extend: {
      colors: {
        primary: "#1c1c22",
        accent: {
          DEFAULT: "#00ff99",
          hover: "#00e187",
        },
    },
    keyframes: {
    },
    animation: {
    },
    },
  },
  plugins: [],
};