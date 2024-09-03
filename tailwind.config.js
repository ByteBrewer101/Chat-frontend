/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        pattern: "url('../assets/pattern1.webp')", // Adjust the path as necessary
      },
    },
  },
  plugins: [],
};

