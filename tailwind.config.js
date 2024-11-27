/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        "Work_Sans": ['"Work Sans", sans-serif'],
        "Montserrat": ['"Montserrat", sans-serif'],
      },
      animation: {
        'slide-down': 'slideDown 0.3s ease-in-out', // Add the custom animation class
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage : {
        Hero_Image : "url('./public/Hero.png')",
      }
    },
    
  },
  darkMode: "class",
  plugins: [nextui()],
};
