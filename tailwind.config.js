// tailwind.config.js
module.exports = {
  purge: ["{app,pages}/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}
