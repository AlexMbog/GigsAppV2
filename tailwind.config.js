/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
          colors: {
        primary: "#FE8C00",
        white: {
          DEFAULT: "#ffffff",
          100: "#F9F9F9",
          200: "#FBFBFF",
        },
        gray: {
          100: "#878787",
          200: "#878787",
          300:"#EBFBFF"
        }, blue:{
           100:"#0D1530",
           200:"#1A2B60",
           300:"#3F62CA",
           400:"#C1CFDA",
            500:"#EBEBFF",
        },
        dark: {
          100: "#181C2E",
        },
        error: "#F14141",
        success: "#2F9B65",
      },
      fontFamily: {
        quicksand: ["Quicksand-Regular", "sans-serif"],
        "quicksand-bold": ["Quicksand-Bold", "sans-serif"],
        "quicksand-semibold": ["Quicksand-SemiBold", "sans-serif"],
        "quicksand-light": ["Quicksand-Light", "sans-serif"],
        "quicksand-medium": ["Quicksand-Medium", "sans-serif"],
      },
  },
  
  plugins: [],
}