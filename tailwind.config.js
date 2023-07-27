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
        blue: "#6554C0",
        mediumGreen: "#64C8BC",
        green: "#45B854",
        orange: "#FFA958",
        lightPink: "#FF8A8A",
        darkBlue: "#3A4C70",
        darkGray: "#9BA7BF",
      },
      fontFamily: {
        body: ["Barlow"],
      },
    },
  },
  plugins: [],
};
