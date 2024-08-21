import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      sm: '480px',
      smd: '600px',
      md: '825px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors:{
        'primary': '',
        'secondary': '#FF69B4',
        'dark': '#000000',
        'gray': '#A9A9A9'
      },
      fontFamily:{
        'primary': ['var(--font-playfair-display)'],
        'secondary': ['var(--font-montserrat)'],
        'accent': ['var(--font-dancing-script)']
      }
    },
  },
  plugins: [],
};
export default config;
