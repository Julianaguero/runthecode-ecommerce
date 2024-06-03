/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      "persimmon": "#E85A13ff",
      "gamboge": "#de3710", //# EB9613ff
      "blueindigo": "#123C64ff",
      "prussian": "#1D3649ff",
      "isabelline": "#F4F0ECff",
    },
    extend: {
      keyframes: {
        tiltShaking: {
          "0%": { transform: "translate(0, 0) rotate(0deg)" },
          "25%": { transform: "translate(5px, 5px) rotate(5deg) " },
          "50%": { transform: "translate(0, 0)" },
          "75%": { transform: "translate(-5px, 5px) rotate(-5deg)" },
          "100%": { transform: "translate(0, 0) rotate(0deg)" },
        },
      },
      animation: {
        tiltShaking: "tiltShaking 300ms linear ",
      },
      
    },
  },
  plugins: [],
};
