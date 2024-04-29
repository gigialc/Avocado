// tailwind.config.ts
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
        'center-color': '#ffcad4', // Very light pink
        'edge-color': '#fff9c2', // Very light yellow
        'background-start': {
          DEFAULT: 'rgb(0,128,128)', // dark green
          light: 'rgb(255,255,255)', // white
        },
        'background-end': {
          DEFAULT: 'rgb(255,192,203)', // pink
          light: 'rgb(0,0,0)', // black for light theme
        },
        'foreground': {
          DEFAULT: 'rgb(255,255,255)', // white text
          light: 'rgb(0,0,0)', // black text in light theme
        },

      },
      backgroundImage: {
        'radial-gradient': "radial-gradient(circle 500px, var(--tw-gradient-stops))",
      }, 
       gradientColorStops: theme => ({
       'center': '#FfFFff',  // Dark color for the center
       'edges': "#FCFFFB",
       
     }),
    },
  },
  plugins: [],
};

export default config;
