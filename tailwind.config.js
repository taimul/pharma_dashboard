/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "",
        secondary: "",
      },
      backgroundColor: {
        primary: "#ECF0F3",
      },
      textColor: {
        primary: "",
      },
      fontFamily: {
        body: ["Barlow"],
      },
    },
  },
  plugins: [],
};
