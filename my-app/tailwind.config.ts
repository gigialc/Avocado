import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-green': '#CCFFCC', // Adjust the hex code as needed
        'light-purple': '#E0B0FF', // Adjust the hex code as needed
      },
    },
  },
  plugins: [],
};
export default config;
