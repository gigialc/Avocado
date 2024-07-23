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
        'primary': '#C9A052', // Hot Pink
        "avo": "#EDE9E3",
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
        width: {
          '30p': '30%',
        },

      },
      backgroundImage: {
        'radial-gradient': "radial-gradient(circle 500px, var(--tw-gradient-stops))",
      }, 
       gradientColorStops: theme => ({
        'center': '#F1FFEB',  // Dark color for the center
        'edges': '#faf7ff',  
       
     }),
    },
  },
  plugins: [],
};

export default config;
