/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        main: "#100031",
        primary: "#060014",
        secondary: "#4c1d95",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
