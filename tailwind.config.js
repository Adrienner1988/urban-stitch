/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      boxShadow: {
        "custom-light": "0px 4px 8px rgba(0, 0, 0, 0.1)",
        "custom-dark": "0px 6px 12px rgba(0, 0, 0, 0.2)",
        "text-shadow": "1px 1px 2px rgba(0, 0, 0, 0.8)",
      },
    },
  },
  plugins: [],
};

