/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-green": "#075E54",
        "regal-green": "#25D366",
        "white-green": "#075E54",
        "primary-gray": "#818181",
      },
    },
  },
  plugins: [],
};
