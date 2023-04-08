/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#2bc655",

          "secondary": "#82e281",

          "accent": "#a31704",

          "neutral": "#282E33",

          "base-100": "#F5F3F7",

          "info": "#2AB0EA",

          "success": "#1C6E5B",

          "warning": "#FB850E",

          "error": "#EA7695",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

