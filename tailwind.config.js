/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "spin-blue": "#22377E", // Azul Spin premia
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, rgba(254,254,254,1) 0%, rgba(255,103,0,1) 51%, rgba(254,254,254,1) 100%)",
      },
    },
  },
  plugins: [],
};
