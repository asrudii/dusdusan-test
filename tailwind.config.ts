import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        "4/6": "4 / 6",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#00b0b9",
        secondary: "#ffad00",
        tertiary: "#282828",
        error: "#C02418",
        "error-25": "#FFFBFA",
        "error-50": "#FEF3F2",
        "error-100": "#FEE4E2",
        "error-200": "#FECDCA",
        "error-300": "#FDA29B",
        "error-400": "#F97066",
        "error-500": "#F04438",
        "error-600": "#D92D20",
        "error-700": "#B42318",
        "error-800": "#912018",
        "error-900": "#7A271A",
      },
      fontSize: {
        h1: [
          "4rem",
          {
            lineHeight: "5rem",
            fontWeight: "700",
          },
        ],
        h2: [
          "2.5rem",
          {
            lineHeight: "3.5rem",
            fontWeight: "700",
          },
        ],
        h3: [
          "2rem",
          {
            lineHeight: "3rem",
            fontWeight: "700",
          },
        ],
        h4: [
          "1.5rem",
          {
            lineHeight: "2rem",
            fontWeight: "700",
          },
        ],
        h5: [
          "1.25rem",
          {
            lineHeight: "1.75rem",
            fontWeight: "700",
          },
        ],
        h6: [
          "1.125rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "700",
          },
        ],
      },
    },
    boxShadow: {
      "el-0": "0px 0px 0px 2px #EBF0FF",
      "el-1": "0px 1px 0px rgba(0, 0, 0, 0.05)",
      "el-2":
        "0px 1px 1px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.25)",
      "el-3": "0px 2px 10px rgba(0, 0, 0, 0.1), 0px 0px 2px rgba(0, 0, 0, 0.2)",
      "el-4": "0 0 15px 1px rgba(0,0,0,.1)",
    },
  },
  plugins: [],
};
export default config;
