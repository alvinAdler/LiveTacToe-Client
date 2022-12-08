/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        black: "#2B2B2B",
        white: "#FAFAFA",
        accent: "#EB6440",
        primary: "#EFF5F5",
        secondary: "#D6E4E5",
        sub: "#497174",
        red: "#EB4034",
        green: "#34eb5f"
      },
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}
