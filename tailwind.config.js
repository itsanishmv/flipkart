/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "flipkart-blue": "#2874F0",
        "flipkart-yellow": "#DAD129",
        default: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
