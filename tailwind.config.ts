import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': {
        'max': '320px' // Extra small devices (phones)
      },
      // => @media (max-width: 320px) { ... }
      'sm': {
        'min': '0px',
        'max': '768px' // Small devices (phones to tablets)
      },
      // => @media (min-width: 321px) and (max-width: 768px) { ... }
      'md': {
        'min': '769px',
        'max': '1024px' // Medium devices (tablets to small desktops)
      },
      // => @media (min-width: 769px) and (max-width: 1024px) { ... }
      'lg': {
        'min': '1025px',
        'max': '1440px' // Large devices (desktops)
      },
      // => @media (min-width: 1025px) and (max-width: 1440px) { ... }
      'xl': {
        'min': '1441px' // Extra large devices (large desktops)
      }
      // => @media (min-width: 1441px) { ... }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
