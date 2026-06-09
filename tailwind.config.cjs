/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Encode Sans Condensed"', "ui-sans-serif", "system-ui", "sans-serif"],
        display: ['"Encode Sans Condensed"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        ink: {
          950: "#050814",
          900: "#08111f",
          850: "#0b1324",
          800: "#10192d",
          700: "#1b2740",
        },
        steel: {
          100: "#dbe3f3",
          200: "#b8c4db",
          300: "#8ea0c0",
        },
        skyglow: {
          400: "#7f9cff",
          500: "#5e7cff",
          600: "#3f63ff",
        },
        plum: {
          400: "#a78bfa",
          500: "#8b5cf6",
        },
      },
    },
  },
  plugins: [],
};
