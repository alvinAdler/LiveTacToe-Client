/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        black: {
          100: "#2B2B2B",
          200: "#2B2B2B66"
        },
        white: "#FAFAFA",
        accent: {
          100: "#EB644007",
          200: "#EB6440"
        },
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
