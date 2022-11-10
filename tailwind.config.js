/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: "#5465FF",
          bg: "#161724",
          card: "#1C1F3A",
          activeCard: "#252D7E",
          heading: "#FFFFFF",
          text: "#E0E0E0",
          subText: "#B7B7B7",
          soft: "#828EFF",
        },
        light: {
          primary: "#5465FF",
          bg: "#F5F5F5",
          bg2: "#282F73",
          heading: "#161724",
          text: "#000000",
          subText: "#B7B7B7",
          soft: "#CCCFEA",
        },
      },
      screens: {
        tablet: "768px",
        laptop: "1024px",
        card: "910px",
      },
    },
    fontFamily: {
      primary: ["Lato", "sans-serif"],
      heading: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
