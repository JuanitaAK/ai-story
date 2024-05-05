import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        //   "gradient-conic":
        //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-gradient":
          "linear-gradient(0deg, rgb(30, 12, 204), rgb(36, 152, 213), rgb(244, 244, 244))",
      },
      colors: {
        "background-light": "#FFFFFF",
        background: "#FFFFFF",
        bgFooter: "#33A8FF",
        navbar: "#FFFFFF",
        "nav-font": "#2196f3",
        "nav-hover": "#03045e",
        font: "#023e8a",
        button: "#1e88e5",
        hover: "#023e8a",
        story: "#9ed4f8",
        title: "#1E90FF",
      },
      fontFamily: {
        sans: ["sans-serif", "Arial", "Helvetica"],
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
      animation: {
        blob: "blob 3s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
