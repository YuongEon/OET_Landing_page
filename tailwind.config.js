/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sml: "375px",
      sm: "640px", 
      md: "768px", 
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      width: {
        "w-521": "521px",
      },
      margin: {
        "0-auto": "0 auto",
        4.5: "18px",
      },
      height: {
        "100px": "100px",
      },
      boxShadow: {
        "inner-shadow-cuz": "0px 0px 2px 0px rgba(0, 0, 0, 0.50) inset;",
      },
      letterSpacing: {
        light: "1px",
        2: "2px",
      },
      gap: {
        13: "50px",
        15: "72px",
      },
    },
  },
  plugins: [],
};
