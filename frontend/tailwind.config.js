/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Nomeie como 'brand' ou 'purple-tech'
        brand: "#6366F1",
      },
      fontFamily: {
        space: ['"Space Grotesk"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
