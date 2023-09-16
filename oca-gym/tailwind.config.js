/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6F1717",
        secondary:"#06202F",
        darkGrey: "#1B1B1B",
        offWhite: "#FEFEFE",
        cardColor: "#F4F2F2",
        bodyBackground: "#111111",
        navBg: "#000000"
      },
    },
  },
  plugins: [],
};
