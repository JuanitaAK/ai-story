import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      colors: {
        "background-light": "#FFFFFF",
        background: "#FFFFFF",
        bgFooter: "#4c71f5",
        navbar: "#FFFFFF",
        font: "#343a40",
        button: "#FF7F50",
        hover: "#FFD700",
        story: "#9ed4f8",
        title: "#1E90FF",
      },
      fontFamily: {
        sans: ["Arial", "sans-serif"],
      },
      fontSize: {
        sm: "0.1rem",
        base: "1.125rem",
        lg: "1.25rem",
        xl: "1.1.5rem",
      },
      spacing: {
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem",
        "6": "1.5rem",
        "8": "2rem",
      },
    },
  },
  plugins: [],
};
export default config;
