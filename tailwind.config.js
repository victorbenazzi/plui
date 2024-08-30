/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#623CEA",
          dark: "#4E2EC3",
          light: "#734DFF",
        },
        secondary: {
          default: "#FA84D4",
          dark: "#E664BC",
          light: "#FF9BE3",
        },
      },
    },
  },
  plugins: [],
};
