/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    animations: {
      clockwise: {
        "0%, 100%": { transform: "rotate(0deg)" },
        "50%": { transform: "rotate(360deg)" },
      },
    },
    anticlockwise: {
      "0%, 100%": { transform: "rotate(0deg)" },
      "50%": { transform: "rotate(-360deg)" },
    },
  },
  plugins: [require("flowbite/plugin"), require("tailwindcss-animate")],
};
