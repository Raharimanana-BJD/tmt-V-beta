module.exports = {
  purge: ["./index.html", "./main.js"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        text: "var(--text)",
        background: "var(--background)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
      },
      fontFamily: {
        poppin: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "7xl": "4.5rem",
        "8xl": "6rem",
        "9xl": "8rem",
      },
      spacing: {
        100: "28rem",
        110: "32rem",
        120: "36rem",
      },
      backgroundBlur: (theme) => ({
        ...theme("blur"),
        200: "200",
      }),
    },
  },
  plugins: [],
};
