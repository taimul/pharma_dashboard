/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "",
      },
      backgroundColor: {
        primary: "#ECF0F3",
        secondary: "#F9FAFC",
      },
      textColor: {
        primary: "",
        secondary: "#6554C0",
      },
      fontFamily: {
        body: ["Barlow"],
      },
    },
  },
  plugins: [],
};
