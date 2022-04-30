const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkgreen: colors.green[800],
        lightgreen: colors.emerald[400],
        blue: {
          DEFAULT: colors.cyan[200],
        },
        black: "#031926",
      },
    },
    fontFamily: {
      sans: ["Hind Madurai", "sans"],
      display: ["Overpass", "sans"],
    },
  },
  plugins: [],
};
