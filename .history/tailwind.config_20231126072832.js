module.exports = {
  purge: ["./index.html", "./main.js"],
  darkMode: "false", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        text: "var(--text)",
        background: "var(--background)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
      },
    },
  },
  plugins: [],
};
