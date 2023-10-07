/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#d91d57",
        "title-color": "#1C1D1B",
      },
      maxWidth: {
        standard: "90rem",
        large: "125rem",
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
    },
  },
  plugins: [require("daisyui")],
};
