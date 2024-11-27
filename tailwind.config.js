/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Work_Sans: ['"Work Sans"', "sans-serif"],
        Montserrat: ['"Montserrat"', "sans-serif"],
      },
      animation: {
        'slide-down': 'slideDown 0.3s ease-in-out',
        'gradient-flow': 'gradientFlow 8s ease infinite',
        'fade-in': 'fadeIn 2s ease forwards',
        'slide-up': 'slideUp 1.5s ease forwards',
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        gradientFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backgroundImage: {
        Hero_Image: "url('./public/Hero.png')",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
