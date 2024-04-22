const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        RobotoMono: ['"Roboto Mono"', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        lightMode: "url('src/light-mode-blob-scene.svg')",
        darkMode: "url('src/dark-mode-blob-scene.svg')",
      },
    },
  },
  plugins: [],
  mode: "jit",
  darkMode: "class",
};
