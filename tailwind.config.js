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
        "linear-spin":
          "linear-gradient(130deg, rgba(34,55,126,1) 0%, rgba(66,82,151,1) 17%, rgba(34,55,126,1) 18%, rgba(34,55,126,1) 100%)",
      },
    },
  },
  plugins: [],
};
