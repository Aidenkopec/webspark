/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#2a2c3a", // Dark Gray
        secondary: "#f3f3f3", // Light Gray
        tertiary: "#aaa6c3", // Grayish Purple
        background: "#1e1f2c", // Very Dark Blue
        text: "#00B7C2", // Teal
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/newback.png')",
      },
    },
  },
  plugins: [],
};
