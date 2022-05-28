const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkgreen: "#46856D",
        lightgreen: "#66AD7E",
        black: "#031926",
        light: "#E3C48F",
        medium: "#B08556",
        dark: "#965E30",
        extradark: "#694B2A",
      },
    },
    fontFamily: {
      sans: ["Hind Madurai", "sans"],
      display: ["Overpass", "sans"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
