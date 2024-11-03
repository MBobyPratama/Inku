/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#333333",
        background: "#FFFFFF",
        primary: "#FFA947",
        secondary: "#FFEAD1",
        accent: "#aeaa93",
      },
    },
  },
  plugins: [],
};
