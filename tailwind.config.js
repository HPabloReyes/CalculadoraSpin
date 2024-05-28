/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "spin-blue": "#005C80", // Azul Spin premia
      },
    },
  },
  plugins: [],
};
