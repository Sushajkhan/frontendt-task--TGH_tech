/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#101010",
        blue: "#3897F0",
        red: "#D90000",
      },
    },
  },
  plugins: [],
};
